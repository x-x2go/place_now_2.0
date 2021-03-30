import React from "react";
import Category from "./Category";
import "../style/SearchBar.css";
import DetailInfo from "./DetailInfo";



const SearchBar = ({map, mapApi, addPlace, onClickCategory, detailInfo, setDetailInfo, findIsOpen}) => {

        return ( 
            <div className="searchBar">
                <div id="mainLogo">
                    <img
                    src="https://place-now.s3.ap-northeast-2.amazonaws.com/logo/place_now_logo.png"
                    alt="place-now logo"
                    />
                </div>

                { detailInfo ?
                <DetailInfo info={detailInfo} setDetailInfo={setDetailInfo} findIsOpen={findIsOpen}/> : 
                <Category 
                map={map}
                mapApi={mapApi} 
                onClickCategory={onClickCategory}/>
                }

              
        </div>
        )
    

}

export default SearchBar;