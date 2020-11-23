import React from "react";
import Category from "./Category";
import "../style/SearchBar.css";

class SearchBar extends React.Component{

    render(){
        return (
            <div className="searchBar">
                <div id="mainLogo">
                    <img
                    src="https://place-now.s3.ap-northeast-2.amazonaws.com/logo/logo.png"
                    alt="place-now logo"
                    />
                </div>
                <input
                    id="pac-input"
                    className="controls"
                    type="text"
                    placeholder="Search Box"
                />
                <Category/>
        </div>
        )
    }
}

export default SearchBar;