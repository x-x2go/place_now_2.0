import React from "react";
import SearchBar from "./component/SearchBar";
import { Map, GoogleApiWrapper } from "google-maps-react";
import dotenv from "dotenv";
import './App.css';
import "./style/Map.css"

dotenv.config();

class App extends React.Component{

  render(){
    console.log(this.props);
    const { google } = this.props;
    return (
      <div className="wrap">
        <SearchBar google={google}/>
        <div className="map">
        <Map 
          google={google}
          zoom={15}
          initialCenter={{ lat: 37.5, lng: 127 }}
        ></Map>
        </div>
      </div>
    );
  }



}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(App);
