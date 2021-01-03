import React from "react";
import '../style/Infowindow.css';

const Infowindow = ({ place }) => {

    return (
        <div className='infowindow_wrap'>
            <div className='infowindow'>
                <div id='infoTitle' className='info_title'>
                <div className='place_name'>{ place.name }</div>
                    <div className='more_detail'>&#62;</div>
                </div>
                <div className='info_etc'>
                    <p>{ place.vicinity || place.formatted_address }</p>
                    <p>⭐{ place.rating || "별점없음"}</p>
                </div>
            </div>
            <div className='infowindow_anchor'></div>
        </div>
    )

}

export default Infowindow;