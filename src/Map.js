import React, { useState } from 'react';
import GoogleMap from 'google-map-react';
import SearchBar from './component/SearchBar';
import dotenv from "dotenv";
import './Map.css';
import Marker from './component/Marker';

dotenv.config();

const Map = props => {
    const [apiReady, setApiReady] = useState(false);
    const [map, setMap] = useState(null);
    const [googlemaps, setGooglemaps] = useState(null);
    const [center, setCenter] = useState({ lat: 37.5, lng: 127 });
    const [places, setPlaces] = useState([]);

    let zoom = 10;

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

    const addPlace = (place) => {
        if(place){
            setPlaces(place);
        }
      };

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
               {places.length !== 0 &&  places.map((place) => (
              <Marker
                key={place.id}
                text={place.name}
                lat={place.geometry.location.lat()}
                lng={place.geometry.location.lng()}
              />
            ))}
                </GoogleMap>
            </div>
        </div>
    )
}

export default Map;