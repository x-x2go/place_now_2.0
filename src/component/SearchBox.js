import React, {  useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const SearchWrap =styled.div`
  width:400px;
  height: 60px;
  position: absolute;
  z-index: 60;
  float:left;
  button{
    border-radius: 30px;
    margin: 18px;
    position: relative;
    ${props =>
    props.appear ?
    css`
      width: 25px;
      height: 25px;
      top: 2px;
      left: -70px;
      background-color: #ffffff;
    `:
    css`
      width: 40px;
      height: 40px;
      background-color: #efefef;
    `
  }
  }
`
const boxOpen = keyframes`
  from {
    width: 20px;
  }
  to {
    width: 240px;
  }
`;

const boxClose = keyframes`
  from {
    width: 240px;
  }
  to {
    width: 20px;
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

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${props =>
    props.appear ? boxOpen : boxClose };
  animation-fill-mode: forwards;

`


const SearchBox = ({map, mapApi, addPlace}) => {
  const searchInput = useRef();
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [animate, setAnimate] = useState(false);

  const onPlacesChanged = (searchBox) => {
    const selected = searchBox.getPlaces();
    addPlace(selected);
  }

  const clearSearchBox = () => {
    searchInput.current.value = '';
    searchInput.current.focus();
  }

  const clickButton = () => {
    setShowSearchBox(!showSearchBox);
    if (showSearchBox) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
  }

  useEffect(()=>{
    if(showSearchBox){
          const searchBox = new mapApi.places.SearchBox(searchInput.current);
          searchBox.addListener('places_changed', ()=>{ onPlacesChanged(searchBox) });
          searchBox.bindTo('bounds', map);
        
        return () => {
          mapApi.event.clearInstanceListeners(searchBox);
      }
    }
    
  },[showSearchBox]);



  return (
    <SearchWrap appear={(showSearchBox || animate)}>
      {(animate || showSearchBox) && <Input
          id="pac-input"  
          appear = {showSearchBox}
          type="text"
          placeholder="Search Box"
          onFocus={clearSearchBox}
          ref={searchInput}
      />}
      <button onClick={clickButton}><i className={`fas fa-${(showSearchBox || animate) ? "chevron-left" : "search"}`}></i></button>
    </SearchWrap>)
}

export default SearchBox;