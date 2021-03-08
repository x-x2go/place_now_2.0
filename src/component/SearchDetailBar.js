import React, { useState, useRef } from "react";
import '../style/SearchDetailBar.css';


const SearchDetailBar = ({onClickIsOpen, searchByType, searchByTime }) => {

  const [openBtnClick, setopenBtnClick] = useState(false);
  const inputTime = useRef(); 

  const btnColor ={
    background : openBtnClick? "#f37c56" : "#EFEFEF"
  }

    const getCurrentTime = () => {
      let currentTime = new Date();
      const currentMin =
        (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
      const currentHours =
        (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
      return currentHours + ":" + currentMin;
    }

    const onClickOpenNow =()=> {
      inputTime.current.value = getCurrentTime();
      setopenBtnClick(!openBtnClick);
      onClickIsOpen();  
    }

    return (
        <div id="searchDetail" className="detailSearchBar">
        <button id="openNow" className="openNow" onClick={onClickOpenNow} style={btnColor}>현재 영업중</button>
        <form id="timeBar" className="timeBar">
          <input type="time" id="timeSelection" name="timeSelection" ref={inputTime}/>
          <button type="button" id="setTimeButton" onClick={()=>{searchByTime(inputTime.current.value);}}>
            <i className="fas fa-search"></i>
          </button>
        </form>
        <button id="searchAgain" onClick={searchByType}>
          현재 위치에서 검색<i className="fas fa-search"></i>
        </button>
        <button id="closeAll"><i className="fas fa-times"></i></button>
      </div>
    )
}

export default SearchDetailBar;