import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfoWindow from './Infowindow';


const Wrapper = styled.div`
  z-index: ${(props) => (props.target ? 999 : 11)};
  position: absolute;
  top: 50%;
  left: 50%;
  width: fit-content;
  height: fit-content;
  user-select: none;
  transform: translate(-50%, -90%);
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};

  &:hover{
    z-index:999;
    &::after{
      content: "${(props) => (props.name)}";
      font-size: 13px;
      line-height: 1.3;
      position: absolute;
      top: 70%;
      left: 70%;
      width: max-content;
      height: fit-content;
      background-color: white;
      padding: 2px 5px;
      border-radius: 8px;
      border: 1px #cdcdcd solid;
    }
  }

`;


const Marker = ({ text, target, place, setDetailInfo}) => {
  const placeTypes = ["cafe","restaurant","bakery","supermarket","shopping_mall","hospital","pharmacy","bank"];
  let iconType = placeTypes.includes(place.types[0]) ? place.types[0] : "default";
  let icon = target ? { name : "dot", width : "10px" } : { name : iconType , width : "40px" };



  return (
    <div>
    {target && <InfoWindow place={place} setDetailInfo={setDetailInfo} />}
    <Wrapper
      className="marker"
      name = {place.name}
      alt={text}>
          <img src={`https://place-now.s3.ap-northeast-2.amazonaws.com/marker/icon_${icon.name}.png`} alt={text} width={icon.width}/>
    </Wrapper>
    </div>
  );
} 

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;