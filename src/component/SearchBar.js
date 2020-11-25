import React from "react";
import Category from "./Category";
import "../style/SearchBar.css";
import SearchBox from "./SearchBox";

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
                <SearchBox google={this.props.google}/>
                <Category/>
        </div>
        )
    }
}

export default SearchBar;