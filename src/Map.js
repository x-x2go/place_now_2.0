import React, { useState, useEffect, useRef } from 'react';
import GoogleMap from 'google-map-react';
import SearchBar from './component/SearchBar';
import dotenv from "dotenv";
import './Map.css';
import Marker from './component/Marker';
import SearchDetailBar from './component/SearchDetailBar';
 
dotenv.config();

const Map = props => {
    const [apiReady, setApiReady] = useState(false);
    const [map, setMap] = useState(null);
    const [googlemaps, setGooglemaps] = useState(null);
    const [places, setPlaces] = useState([]);
    const [target, setTarget] = useState(null);
    
    let openNow = false;
    let placeType=useRef();

    let zoom = 10;
    let service;
    const center = { lat: 37.5, lng: 127 };

    if(window.screen.width >= 768){
        zoom = 15;
    }


    const handleApiLoaded = (map, maps) => {
        if (map && maps) {
            setApiReady(true);
            setMap(map);
            setGooglemaps(maps);
        }  
    };

    const onClickMap = () =>{
        setTarget(null);
    }

    const onClickIsOpen = () => {
        openNow = !openNow;
        searchByType();
    }

    const onClickCategory = (type) => {
        placeType.current = type;
        searchByType();
    }

    const searchByType = () => {
        console.log(placeType.current);
        service = new googlemaps.places.PlacesService(map);
        let request = {
          location: map.getCenter(),
          radius: "500",
          type: [placeType.current],
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

    const addPlace = (places) => {
        if(places){
            // Promise만으로는 너무 Marker가 느리게 뜨기 때문에 우선적으로 Marker표시
            setPlaces(places);
            Promise.all(places.map( x=> getPlaceDetail(x))).then(value=>{
                setPlaces(value);
            });
            onPlacesChanged(places);
        }
      };

      const getPlaceDetail =  (temp_place) => {
                const request = {
                placeId: temp_place.place_id,
                fields: [
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

                return new Promise( (resolve, reject) => {
                   service.getDetails(request, function(place, status) {
                        if (status === googlemaps.places.PlacesServiceStatus.OK) {
                            resolve(place);
                        }else{
                            window.setTimeout( ()=>{resolve(getPlaceDetail(temp_place))}, 2000);
                            console.log(status);
                        }
                    });
                })
      }

      const markerClicked = (key) => {
           // infowindow 닫기
        setTarget(key);
      }

    const onPlacesChanged = (places) => {
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
            {apiReady && googlemaps && (
            <SearchBar 
            map={map}
            mapApi={googlemaps}
            addPlace={addPlace}
            onClickCategory = {onClickCategory}
            // onPlacesChanged={onPlacesChanged}
            />)}
            <div className = "googleMap">
                {places.length !== 0 && <SearchDetailBar onClickIsOpen={onClickIsOpen}/>}
                <GoogleMap
                bootstrapURLKeys={{ 
                    key: process.env.REACT_APP_GOOGLE_API_KEY,
                    libraries: 'places' 
                     }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onChildClick={markerClicked}
                onClick={onClickMap}
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