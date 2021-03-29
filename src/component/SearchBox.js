import React, {  useEffect, useRef } from 'react';
import styled from 'styled-components';

const SearchWrap =styled.div`
  width:300px;
  height: 60px;
  position: absolute;
  z-index: 60;
  float:left;
  button{
    width: 40px;
    height: 40px;
    border-radius: 30px;
    background-color: salmon;
    margin: 18px;
    position: absolute;
  }
`

const Input = styled.input`
  background-color: #fff;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  padding: 5px 11px 5px 13px;
  margin: 20px;
  text-overflow: ellipsis;
  width: 240px;
  border: 1px solid #aaaaaa;
  border-radius: 30px;
}
`

const SearchBox = ({map, mapApi, addPlace}) => {
  const searchInput = useRef();

  const onPlacesChanged = () => {
    const selected = searchInput.getPlaces();
    addPlace(selected);
  }

  const clearSearchBox = () => {
    searchInput.current.value = '';
    searchInput.current.focus();
  }

  useEffect(()=>{
    const searchBox = new mapApi.places.SearchBox(searchInput.current);
    if(searchBox){
          searchBox.addListener('places_changed', onPlacesChanged);
          searchBox.bindTo('bounds', map);
        }
    return () => {
      mapApi.event.clearInstanceListeners(searchBox);
    }
  },[]);


  return (
    <SearchWrap>
      <button><i className="fas fa-search"></i></button>
      <Input
          id="pac-input"  
          className="controls"
          type="text"
          placeholder="Search Box"
          onFocus={clearSearchBox}
          ref={searchInput}
      />
    </SearchWrap>)
}

export default SearchBox;