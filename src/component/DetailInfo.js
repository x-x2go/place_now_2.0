import React, {useEffect} from "react";
import styled from 'styled-components';
import '../style/DetailInfo.css';

const InfoBlock = styled.div`

width: 100%;
height: 80%;
position: absolute;
bottom: 0;
background: white;
border-radius: 200px 200px 0 0 /20%;
animation-duration: 0.5s;
animation-name:  growup;


@keyframes growup {
    from {
      height: 0px;
    }
    to {
      height: 80%;
    }
  }

`

const DetailInfo = ({ info, setDetailInfo }) => {

    // useEffect(()=>{
    //     const today = new Date();
    //    // const today_num = today.getDay() === 0 ? 6 : today.getDay() - 1;
    // },[]);

    const showWeekDay = text =>  <span>{text}</span>

    const onClickClose = () => {
        
        setDetailInfo(null);
    }
      
    
    return (
    <InfoBlock>
        <div className='closeBtn' onClick={onClickClose}><i className="fas fa-chevron-down"></i></div>
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