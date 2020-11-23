import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import dotenv from "dotenv";
import "../style/Map.css"

dotenv.config();

class MapAPI extends React.Component {
  render() {
    return (
        <div className="map">
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 37.5, lng: 127 }}
        ></Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY,
})(MapAPI);

