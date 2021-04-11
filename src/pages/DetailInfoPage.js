import React from "react";
import DetailInfo from "../component/DetailInfo";

const DetailInfoPage = ({ match, location }) => {
    const id = match.params.place_id;
    
    const {
        name, 
        formatted_address, 
        formatted_phone_number, 
        periods,
        weekday_text,
        rating
    } = location.state;

    const url = location.pathname.split("/place")[0];
    return(
        <DetailInfo
        key= {id}
        name={name}
        formatted_address={formatted_address}
        formatted_phone_number= {formatted_phone_number}
        periods={periods}
        weekday_text={weekday_text}
        rating={rating}
        goback={url}
        />
    )

}

export default DetailInfoPage;