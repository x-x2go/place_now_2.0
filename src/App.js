import React from "react";
import SearchBar from "./component/SearchBar";
import Map from "./component/Map";
import {HashRouter, Route} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="wrap">
      <SearchBar/>
      <Map/>
    </div>
  );
}

export default App;
