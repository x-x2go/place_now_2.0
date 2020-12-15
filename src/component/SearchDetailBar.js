import React from "react";
import '../style/SearchDetailBar.css';


const SearchDetailBar = () => {

    return (
        <div id="searchDetail" className="detailSearchBar">
        <button id="openNow" className="openNow">현재 영업중</button>
        <form id="timeBar" className="timeBar">
          <input type="time" id="timeSelection" name="timeSelection" />
          <button type="button" id="setTimeButton">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <button id="searchAgain">
          현재 위치에서 검색<i className="fas fa-search"></i>
        </button>
        <button id="closeAll"><i className="fas fa-times"></i></button>
      </div>
    )


}

export default SearchDetailBar;