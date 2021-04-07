import React from "react";
import { Route, Link } from "react-router-dom";
import Category from "./Category";
import "../style/SearchBar.css";
import DetailInfo from "./DetailInfo";
import DetailInfoPage from "../pages/DetailInfoPage";



const SearchBar = ({ location }) => {

        return ( 
            <div className="searchBar">
                <Link to="/" onClick={() => window.location.reload()}><div id="mainLogo">
                    <img
                    src="https://place-now.s3.ap-northeast-2.amazonaws.com/logo/place_now_logo.png"
                    alt="place-now logo"
                    />
                </div></Link>
                <Route path={location} exact component={ Category } />
                <Route path={`${location}/place/:placeId`} component={ DetailInfoPage } />

              
        </div>
        )
    

}

export default SearchBar;