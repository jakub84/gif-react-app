import React, { useState } from 'react';
import styled from 'styled-components';
import Details from './Details';
import placeholder from '../../assets/images/placeholder.jpg';

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -300px;
  background-color: rgba(204, 153, 51, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 10px;
`;

const ImagePlaceholder = styled.div`
  width: calc(100% / 4);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  background-image: ${props => `url(${props.bg})`};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  @media (max-width: 1250px) {
    width: calc(100% / 3);
  }
  @media (max-width: 800px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const GifWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: 2px solid rgba(255, 255, 255, 0.4);
  display: inline-block;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 14px;
  text-align: center;
`;

const SingleGif = ({ singleGif }) => {
  const { title } = singleGif;
  const [details, setDetails] = useState(false);
  return (
    <>
      <Details
        singleGif={singleGif}
        details={details}
        setDetails={setDetails}
      />
      <ImagePlaceholder bg={placeholder}>
        <GifWrapper
          bgImage={singleGif.images.downsized_large.url}
          onClick={() => setDetails(!details)}
        >
          <InnerWrapper>
            {title ? (
              <GifTitle>{title[0].toUpperCase() + title.slice(1)}</GifTitle>
            ) : (
              'No title'
            )}
          </InnerWrapper>
        </GifWrapper>
      </ImagePlaceholder>
    </>
  );
};

export default SingleGif;
