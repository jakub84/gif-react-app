import React from 'react';
import styled from 'styled-components';
import SingleGif from './SingleGif';

const GifsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GifsList = ({ allGifs }) => (
  <GifsWrapper>
    {allGifs.map(singleGif => (
      <SingleGif key={singleGif.id} singleGif={singleGif} />
    ))}
  </GifsWrapper>
);

export default GifsList;
