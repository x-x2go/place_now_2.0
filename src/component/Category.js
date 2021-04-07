import React from "react";
import { NavLink } from 'react-router-dom';

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



const Category = ({ onSelect }) => {
    const categoryList = categories.map((category, i) => 
    (<div className="category"> <NavLink key = {category.id} activeClassName='active' className="category" to={`/${category.id}`}><button  className={category.id}>
        <i className={category.icon}></i>
    </button></NavLink>
    <p>{category.name}</p></div>)
        )
    
    
    
    return(
        <div className="category" id="category">
            {categoryList}
        </div> 
    )
}

export default Category;