import React, { useState } from 'react';
import styled from 'styled-components';
import { rotate } from '../Animations';

const BtnLabel = styled.label`

  /* border: ${props => (props.clicked ? '3px solid orange' : '3px solid lightgrey')}; */
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  overflow: hidden;
  padding: 20px;
  margin: 5px 10px;
  min-width:200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${props => (props.clicked ? 'lightgreen' : 'orange')};
  color: ${props => (props.clicked ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.5)')};
  :hover {
    animation: ${rotate} 0.4s linear forwards;
  }
  @media (max-width: 600px) {
    margin-bottom: 30px;
  }

  @media (max-width: 300px) {
    min-width:unset;
    width:100%;
    padding: 20px 5px;
  }
`;

const BtnInput = styled.input`
  position: absolute;
  left: -9999em;
`;

const ButtonUrl = ({ id, value }) => {
  const [clicked, setClicked] = useState(false);
  const copyUrl = (selectedInput) => {
    const element = selectedInput;
    element.select();
    document.execCommand('copy');
    setClicked(true);
  };

  return (
    <BtnLabel htmlFor={id} clicked={clicked}>
      {clicked ? 'Copied' : 'Copy Url'}
      <BtnInput
        type="text"
        onClick={event => copyUrl(event.target)}
        defaultValue={value}
        id={id}
      />
    </BtnLabel>
  );
};

export default ButtonUrl;
