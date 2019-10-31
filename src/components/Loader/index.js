import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }


`;

const LoaderWrapper = styled.div`
  margin: 50px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fff;
`;

const Cicle = styled.span`
  border: 3px dotted gray;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
  animation: ${rotate} 4s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => (
  <LoaderWrapper>
    <Cicle>
      Loading
    </Cicle>

  </LoaderWrapper>
);

export default Loader;
