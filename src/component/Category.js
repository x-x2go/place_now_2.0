import React from "react";
import styled from 'styled-components';


const Category = ({ map, mapApi, addPlace}) => {
    let service = new mapApi.places.PlacesService(map);
    const categories = [
        { id: "cafe", icon: "fas fa-coffee"}, 
        { id: "restaurant", icon: "fas fa-utensils"}, 
        { id: "bakery", icon: "fas fa-bread-slice"}, 
        { id: "supermarket", icon: "fas fa-shopping-cart"},
        { id: "shopping_mall", icon: "fas fa-store"},
        { id: "hospital", icon: "fas fa-hospital-alt"},
        { id: "pharmacy", icon: "fas fa-pills"},
        { id: "bank", icon: "fas fa-piggy-bank"}
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
                console.log(results.map(x=>x.name));
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

    const categoryList = categories.map((category, i) => <button key = {i} className={category.id} onClick={onClick}><i className={category.icon}></i></button>)
    
    
    
    return(
        <div className="category" id="category">
            {categoryList}
        </div> 
    )
}

export default Category;