import React from "react";
import { Route } from "react-router-dom";
import Category from "./Category";
import "../style/SearchBar.css";
import DetailInfo from "./DetailInfo";
import DetailInfoPage from "../pages/DetailInfoPage";



const SearchBar = ({ location }) => {

        return ( 
            <div className="searchBar">
                <div id="mainLogo">
                    <img
                    src="https://place-now.s3.ap-northeast-2.amazonaws.com/logo/place_now_logo.png"
                    alt="place-now logo"
                    />
                </div>
                <Route path={location} exact={true} component={ Category } />
                <Route path={`${location}/place/:placeId`} component={ DetailInfoPage } />
                { 
                //<DetailInfo info={detailInfo} setDetailInfo={setDetailInfo} findIsOpen={findIsOpen}/> 
                }

              
        </div>
        )
    

}

export default SearchBar;