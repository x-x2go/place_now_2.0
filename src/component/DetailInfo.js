import React, {useEffect} from "react";
import styled from 'styled-components';
import '../style/DetailInfo.css';

const InfoBlock = styled.div`

transition: height 0.5s ease-in-out;
width: 100%;
height: 80%;
background: white;
padding-top: 70px;
border-radius: 200px 200px 0 0 /15%;

`

const DetailInfo = ({ info }) => {

    // useEffect(()=>{
    //     const today = new Date();
    //    // const today_num = today.getDay() === 0 ? 6 : today.getDay() - 1;
    // },[]);

    const showWeekDay = text =>  <span>{text}</span>
      
    
    return (
    <InfoBlock>
        <div className='place_title'><h1>{info.name}</h1></div>
        <div className='info_row'>
        <h2><i className='fas fa-star'></i>{info.rating || '별점 없음'}</h2>
        <h2>
        { '영업중'
                /*(info.opening_hours.periods &&
                findIsOpen(
                  info.opening_hours.periods,
                  Number(getCurrentTime().replace(":", ""))
                )
                )? '영업중' : '영업종료'*/
        }</h2></div>
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
    </InfoBlock>
    )
}

export default DetailInfo;