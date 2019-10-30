import React from 'react';
import styled from 'styled-components';

const GifsWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GifContainer = styled.div`
`;
const GifImage = styled.img`
  width: 266px;
  height:200px;
`;

const GifsList = ({ allGifs }) => {
  console.log('allGifs', allGifs);
  return (
    <GifsWrapper>
      {allGifs.map(singleGif => (
        <GifContainer key={singleGif.id}>
          <GifImage src={singleGif.images.fixed_height_downsampled.url} alt={singleGif.title} />
        </GifContainer>
      ))}
    </GifsWrapper>
  );
};

export default GifsList;
