import React, { useState, useEffect } from 'react';
import GoogleMap from 'google-map-react';
import dotenv from "dotenv";
import findIsOpen from "./module/findOpenPlace"
import './Map.css';
import Marker from './component/Marker';
import SearchDetailBar from './component/SearchDetailBar';
import SearchBox from './component/SearchBox';
 
dotenv.config();

const Map = ({ category }) => {
    const [apiReady, setApiReady] = useState(false);
    const [map, setMap] = useState(null);
    const [googlemaps, setGooglemaps] = useState(null);
    const [places, setPlaces] = useState([]);
    const [target, setTarget] = useState(null);
    const [service, setService] = useState(null);
    
    let openNow = false;

    let zoom = 10;
    const center = { lat: 37.5, lng: 127 };

    if(window.screen.width >= 768){
        zoom = 15;
    }

    const timer = ms => new Promise(res=>setTimeout(res, ms));

    const handleApiLoaded = (map, maps) => {
        if (map && maps) {
            setMap(map);
            setGooglemaps(maps);
            setApiReady(true);
        }  
    };

    useEffect(()=>{
        if(googlemaps){
            const defineservice = new googlemaps.places.PlacesService(map);
            setService(defineservice);
        }
    }, [googlemaps])

    useEffect(()=>{
        if (map && service && category){
            searchByType();
        }
    },[category]);

    
    const onClickIsOpen = () => {
        openNow = !openNow;
        searchByType();
    }


    const searchByType = () => {
        
        let request = {
          location: map.getCenter(),
          radius: "500",
          type: [category],
          openNow: openNow,
        };
        
        
        service.nearbySearch(request, showPlace);
        
    }
      
    const showPlace = (results, status) => {
            if (status === googlemaps.places.PlacesServiceStatus.OK) {
                addPlace(results);
            } else {
              alert("no results");
            }
    }

    const searchByTime = (time) => {
        const searchTime = Number(time.replace(":", ""));
      
        const openPlaces = places.filter((place) => {
          if (!place.opening_hours) return false;
          return findIsOpen(place.opening_hours.periods, searchTime);
        });
      
        setPlaces(openPlaces);
      }


    const addPlace = async (places) => {
        if(places){
            // Promise만으로는 너무 Marker가 느리게 뜨기 때문에 우선적으로 Marker표시
            setPlaces(places);

            const detailinfo = await requestInfo(places);
            setPlaces(detailinfo);
            fitBoundsOnMap(places);
        }
      };

      const requestInfo = async (places) => {
          let requestPlaces = places.slice();
          let finPlaceInfo =[];

          const getPlaceDetail = (temp_places) => {
            
            temp_places.forEach(temp_place=>{
                const request = {
                  placeId: temp_place.place_id,
                  fields: [
                      "place_id",
                      "name",
                      "formatted_address", 
                      "formatted_phone_number",
                      "geometry",
                      "opening_hours",
                      "rating",
                      "type",
                      "icon",
                  ],
                  };
  
                  service.getDetails(request, (place, status)=>{
                      if (status === googlemaps.places.PlacesServiceStatus.OK) {
                          const info = place;
                          finPlaceInfo.push(info);
                       }else{
                          requestPlaces.push(temp_place);
                          console.log(status);
                       }
                  })
  
            })
           
        }

          while(requestPlaces.length > 0){
              let group = requestPlaces.splice(0, 10);
              getPlaceDetail(group);
              await timer(1500);
          }
          return finPlaceInfo;
      }


      const markerClicked = (key) => {
           // infowindow 닫기
           console.log("clicked "+key);
        setTarget(key);
      }

    const fitBoundsOnMap = (places) => {
        let bounds = new googlemaps.LatLngBounds();

        places.forEach((place)=>{
        if (!place.geometry) return;

        if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }
    })
    map.fitBounds(bounds);
    };


    return(
        <div style={{ height: '100vh'}}>
            <div className = "googleMap">
                {apiReady && <SearchBox map={map}
                mapApi={googlemaps}
                addPlace={addPlace}/>}
                {places.length !== 0 && <SearchDetailBar onClickIsOpen={onClickIsOpen} searchByType= {searchByType} searchByTime={searchByTime}/>}
                <GoogleMap
                bootstrapURLKeys={{ 
                    key: process.env.REACT_APP_GOOGLE_API_KEY,
                    libraries: 'places' 
                     }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onChildClick={markerClicked}
                onClick={() =>{
                    setTarget(null);
                }}
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                > 
               {places.length !== 0 && (places.map((place) => {
                   return(
                   
             <Marker 
                style={{zIndex:"10"}}
                 key={place.place_id}
                 text={place.name}
                 lat={place.geometry.location.lat()}
                 lng={place.geometry.location.lng()}
                 target={place.place_id === target}
                 place={place}
                 category={category}
             />
         )}
    ))
               }
                </GoogleMap>
            </div>
        </div>
    )
}

export default Map;