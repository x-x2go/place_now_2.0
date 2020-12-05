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
  &:hover {
    z-index: 1;
  }
`;


const Marker = ({ text, onClick }) => {
  const [icon, setIcon] = useState("https://place-now.s3.ap-northeast-2.amazonaws.com/marker/icon_default.png");
  const [iconWidth, setIconWidth] = useState("60px");

  const changeIcon = () => { 
    setIcon("https://place-now.s3.ap-northeast-2.amazonaws.com/marker/icon_dot.png");
    setIconWidth("10px");

  }


  return (
    <Wrapper
      className="marker"
      alt={text}
      onClick={changeIcon}>
          <img src={icon} alt={text} width={iconWidth}/>
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