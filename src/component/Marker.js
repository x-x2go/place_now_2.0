import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: fit-content;
  height: fit-content;
  user-select: none;
  transform: translate(-50%, -90%);
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  z-index: 1;
`;


const Marker = ({ text, target}) => {
  let icon = target ? { name : "icon_dot", width : "10px" } : { name :"icon_default", width : "40px" };

  return (
    <Wrapper
      className="marker"
      alt={text}>
          <img src={`https://place-now.s3.ap-northeast-2.amazonaws.com/marker/${icon.name}.png`} alt={text} width={icon.width}/>
    </Wrapper>
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