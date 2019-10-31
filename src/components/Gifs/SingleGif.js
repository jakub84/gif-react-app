import React, { useState } from 'react';
import styled from 'styled-components';
import Details from './Details';

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -300px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 10px;
`;

const GifWrapper = styled.div`
  width: calc(100% / 3);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  background-image: ${props => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &:hover ${InnerWrapper} {
    top: 0;
  }
`;

const GifTitle = styled.h3`
  border: 2px solid #fff;
  display: inline-block;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
`;

const SingleGif = ({ singleGif }) => {
  const { title } = singleGif;
  const [details, setDetails] = useState(false);
  return (
    <>
      <Details singleGif={singleGif} details={details} setDetails={setDetails} />
      <GifWrapper
        bgImage={singleGif.images.downsized_large.url}
        onClick={() => setDetails(!details)}
      >
        <InnerWrapper>{title && <GifTitle>{title}</GifTitle>}</InnerWrapper>
      </GifWrapper>
    </>
  );
};

export default SingleGif;
