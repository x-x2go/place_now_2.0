import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import findIsOpen from '../module/findOpenPlace';
import '../style/DetailInfo.css';


const DetailInfo = ({ 
  name, 
  formatted_address, 
  formatted_phone_number, 
  periods,
  weekday_text,
  rating,
  goback 
}) => {

  const [showInfo, setShowInfo] = useState(0);
  const history = useHistory();


    const showWeekDay = text =>  <span>{text}</span>

    const getTime = () => {
      let currentTime = new Date();
      const currentMin =
        (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
      const currentHours =
        (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
      return currentHours +""+ currentMin;
    }

    
    const closeInfo = () => {
      setShowInfo(1);
      setTimeout(() => history.push(`${goback}`), 250);
    }

    const openIcon = (periods &&
      findIsOpen(
        periods,
        Number(getTime())
      ))? {className: 'openBtn on', text: '영업중'} : {className: 'openBtn', text: '영업종료'};
    
    return (
    <div className='infoBlock'>
        <div className='closeBtn' onClick={closeInfo}><i className="fas fa-chevron-down"></i></div>
        <div className='place_title'><h1>{name}</h1></div>
        <div className='info_row'>
        <h2><i className='fas fa-star'></i>{rating || '별점 없음'}</h2>
        <div>
          <div className={openIcon.className}></div><h2>{openIcon.text}</h2></div>
        </div>
        <div className='info_block'>
            <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
            <div className="place_info">{formatted_address} </div>
        </div>
        <div className='info_block'>
        <span className="icon"><i className="fas fa-phone-alt"></i></span>
            <div className="place_info">
            {formatted_phone_number} </div></div>
        <div className='info_block'>
        <span className="icon"><i className="fas fa-clock"></i></span>
            <div className="place_info">
            {weekday_text ? 
        weekday_text.map(showWeekDay) :
        "영업시간 정보가 없습니다😥"}</div></div>
    </div>
    )
}

export default DetailInfo;