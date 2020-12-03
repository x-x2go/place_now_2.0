import React from "react";
import Category from "./Category";
import "../style/SearchBar.css";
import SearchBox from "./SearchBox";



const SearchBar = props => {

        return (
            <div className="searchBar">
                <div id="mainLogo">
                    <img
                    src="https://place-now.s3.ap-northeast-2.amazonaws.com/logo/logo.png"
                    alt="place-now logo"
                    />
                </div>
                <SearchBox
                map={props.map}
                mapApi={props.mapApi}
                addPlace={props.addPlace}
                // onPlacesChanged={props.onPlacesChanged}
                />
                <Category 
                map={props.map}
                mapApi={props.mapApi} 
                addPlace={props.addPlace}/>
        </div>
        )
    

}

export default SearchBar;