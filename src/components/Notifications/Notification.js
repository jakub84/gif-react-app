import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid lightgray;
  padding:20px;
  margin-top: 30px;
`;

const Notification = ({ text }) => (
  <Wrapper>
    {text}
  </Wrapper>
);

export default Notification;
