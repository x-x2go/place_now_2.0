import React from "react";
import { Link } from "react-router-dom";
import '../style/Infowindow.css';

const Infowindow = ({ place, category }) => {
    const { 
        place_id, 
        name, 
        formatted_address, 
        formatted_phone_number, 
        opening_hours,
        rating
    } = place;

    const url = category ? "/"+category : ""
    
    return (
        <div className='infowindow_wrap'>
            <div className='infowindow'>
                <div id='infoTitle' className='info_title'>
                <div className='place_name'>{ name }</div>
                    <Link to={{ pathname: `${url}/place/${place_id}`, state:{
                        name, 
                        formatted_address, 
                        formatted_phone_number, 
                        opening_hours,
                        rating
                    }}}><div className='more_detail'>&#62;</div>
                    </Link>
                </div>
                <div className='info_etc'>
                    <p>{ place.vicinity || formatted_address }</p>
                    <p>⭐{ rating || "별점없음"}</p>
                </div>
            </div>
            <div className='infowindow_anchor'></div>
        </div>
    )

}

export default Infowindow;