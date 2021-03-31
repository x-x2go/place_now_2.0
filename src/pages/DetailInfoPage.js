import React from "react";
import DetailInfo from "../component/DetailInfo";

const DetailInfoPage = ({ match, location }) => {
    console.log(match);
    const {
        name, 
        formatted_address, 
        formatted_phone_number, 
        opening_hours,
        rating
    } = location.state;
    
    return(
        <DetailInfo name={name}
        formatted_address={formatted_address}
        formatted_phone_number= {formatted_phone_number}
        opening_hours={opening_hours}
        rating={rating}/>
    )

}

export default DetailInfoPage;