import React, {useState, useRef} from "react";
import styled from 'styled-components';
import '../style/DetailInfo.css';

const DetailInfo = ({ info, setDetailInfo, findIsOpen}) => {

  const [showInfo, setShowInfo] = useState(0);

    const showWeekDay = text =>  <span>{text}</span>

    const getTime = () => {
      let currentTime = new Date();
      const currentMin =
        (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
      const currentHours =
        (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
      return currentHours +""+ currentMin;
    }

    const openIcon = (info.opening_hours &&
      findIsOpen(
        info.opening_hours.periods,
        Number(getTime())
      ))? {className: 'openBtn on', text: '영업중'} : {className: 'openBtn', text: '영업종료'};
    
    return (
    <div className='infoBlock' showInfo={showInfo} onAnimationEnd={()=>{if(showInfo){ setDetailInfo(null); }}}>
        <div className='closeBtn' onClick={()=>{setShowInfo(1);}}><i className="fas fa-chevron-down"></i></div>
        <div className='place_title'><h1>{info.name}</h1></div>
        <div className='info_row'>
        <h2><i className='fas fa-star'></i>{info.rating || '별점 없음'}</h2>
        <div>
          <div className={openIcon.className}></div><h2>{openIcon.text}</h2></div>
        </div>
        <div className='info_block'>
            <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
            <div className="place_info">{info.formatted_address} </div>
        </div>
        <div className='info_block'>
        <span className="icon"><i className="fas fa-phone-alt"></i></span>
            <div className="place_info">
            {info.formatted_phone_number} </div></div>
        <div className='info_block'>
        <span className="icon"><i className="fas fa-clock"></i></span>
            <div className="place_info">
            {info.opening_hours ? 
        info.opening_hours.weekday_text.map(showWeekDay) :
        "영업시간 정보가 없습니다😥"}</div></div>
    </div>
    )
}

export default DetailInfo;