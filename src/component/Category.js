import React from "react";
import styled from 'styled-components';


const Category = ({ map, mapApi, addPlace}) => {
    let service = new mapApi.places.PlacesService(map);
    const categories = [
        { id: "cafe",name: "카페", icon: "fas fa-coffee"}, 
        { id: "restaurant",name: "음식점", icon: "fas fa-utensils"}, 
        { id: "bakery",name: "베이커리", icon: "fas fa-bread-slice"}, 
        { id: "supermarket",name: "마트", icon: "fas fa-shopping-cart"},
        { id: "shopping_mall",name: "쇼핑몰", icon: "fas fa-store"},
        { id: "hospital",name: "병원", icon: "fas fa-hospital-alt"},
        { id: "pharmacy",name: "약국", icon: "fas fa-pills"},
        { id: "bank",name: "은행", icon: "fas fa-piggy-bank"}
    ];

    const searchByType = (placeType) => {
        let request = {
          location: map.getCenter(),
          radius: "500",
          type: [placeType],
        };

        service.nearbySearch(request, showPlace);
    }
      
    const showPlace = (results, status) => {
           
            if (status === mapApi.places.PlacesServiceStatus.OK) {
                console.log(results.map(x=>x.types));
                addPlace(results);
            } else {
              console.log(status);
              alert("no results");
            }
          
    }
    const onClick = (e) => {
        console.log("!"+e.target.className);
        searchByType(e.target.className);
    }

    const categoryList = categories.map((category, i) => 
    (<div className="category"><button key = {i} className={category.id} onClick={onClick}>
        <i className={category.icon}></i>
    </button>
    <p>{category.name}</p></div>)
        )
    
    
    
    return(
        <div className="category" id="category">
            {categoryList}
        </div> 
    )
}

export default Category;