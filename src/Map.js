import React, { useState, useEffect } from 'react';
import GoogleMap from 'google-map-react';
import SearchBar from './component/SearchBar';
import dotenv from "dotenv";
import './Map.css';

dotenv.config();

const Map = props => {
    const [apiReady, setApiReady] = useState(false);
    const [map, setMap] = useState(null);
    const [googlemaps, setGooglemaps] = useState(null);
    const [center, setCenter] = useState({ lat: 37.5, lng: 127 });
    const [places, setPlaces] = useState([]);
    const [icon, setIcon] = useState(null);

    let zoom = 10;
    let markers = [];

    if(window.screen.width >= 768){
        zoom = 15;
    }

    const handleApiLoaded = (map, maps) => {
        if (map && maps) {
        setApiReady(true);
        setMap(map);
        setGooglemaps(maps);
        setIcon( {
            url:
              "https://place-now.s3.ap-northeast-2.amazonaws.com/marker/icon_default.png",
             size: new maps.Size(40, 40),
             origin: new maps.Point(0, 0),
             anchor: new maps.Point(20, 40),
             scaledSize: new maps.Size(40, 40),
          });
        }
    };

    const addPlace = (place) => {
        if(place){
            setPlaces(place);
        }
      };

      const makeMarker = (places) => {
        places.forEach((place) => {
            let marker = new googlemaps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location,
                type: place.type,
              });
          
              markers.push(marker);
          })
      }
    // const onPlacesChanged = places => {
    //     setCenter(
    //     (center.lat = places[0].geometry.location.lat()),
    //     (center.lng = places[0].geometry.location.lng())
    //     );
    // };

    return(
        <div style={{ height: '100vh'}}>
            {apiReady && googlemaps && (
            <SearchBar 
            map={map}
            mapApi={googlemaps}
            addPlace={addPlace}
            // onPlacesChanged={onPlacesChanged}
            />)}
            <div className = "googleMap">
                <GoogleMap
                bootstrapURLKeys={{ 
                    key: process.env.REACT_APP_GOOGLE_API_KEY,
                    libraries: 'places', }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    { makeMarker(places) }
                </GoogleMap>
            </div>
        </div>
    )
}

export default Map;