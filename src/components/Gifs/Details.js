import React from 'react';
import styled from 'styled-components';

const DetailsBg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
`;

const MainWrapper = styled.div`
  width: 80%;
  padding:30px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailsField = styled.input`
  width: 80%;
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Details = ({ singleGif, details, setDetails }) => {
  const { title, url, bitly_url: tinyUrl } = singleGif;
  return (
    <>
      {details && (
        <DetailsBg onClick={() => setDetails(!details)}>
          <MainWrapper onClick={null}>
            <DetailsField type="text" value={url} />
            <DetailsField type="text" value={tinyUrl} />
            <DetailsField type="text" value={title} />
          </MainWrapper>
        </DetailsBg>
      )}
    </>
  );
};

export default Details;
