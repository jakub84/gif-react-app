import React, { useState } from 'react';
import styled from 'styled-components';

const BtnLabel = styled.label`
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  overflow: hidden;
  padding: 10px 20px;
  margin: 5px 10px;
  width:100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${props => (props.clicked ? 'orange' : '#fff')};
  color: ${props => (props.clicked ? '#fff' : '#000')};
  :hover {
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