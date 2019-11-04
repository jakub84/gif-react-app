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

const CloseBtn = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-bottom-left-radius: 10px;
  background-color: orange;
  font-size: 12px;
`;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 30px;
  max-height: 600px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const DetailsField = styled.input`
  width: 80%;
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  margin-bottom: 30px;
  width: 100%;
  margin-top: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  max-height: 300px;
`;

const Description = styled.p`
  display: inline-block;
  width: 80%;
  font-size: 14px;
  color: black;
  margin: 15px 0 5px 0;
  font-weight: 800;
  padding-left: 5px;
  text-align: center;
`;

const Details = ({ singleGif, details, setDetails }) => {
  const { title, url, bitly_url: tinyUrl } = singleGif;
  const copyUrl = (selectedInput, defaultUrl) => {
    const element = selectedInput;
    element.select();
    document.execCommand('copy');
    element.value = 'copied!!';
    element.style.backgroundColor = 'lightgreen';

    setTimeout(() => {
      element.value = defaultUrl;
      element.style.backgroundColor = '#fff';
    }, 2000);
  };

  return (
    <>
      {details && (
        <DetailsBg>
          <MainWrapper onClick={null}>
            <CloseBtn
              type="button"
              value="Close"
              onClick={() => setDetails(!details)}
            />
            <Description>{title.toUpperCase()}</Description>
            <ImageContainer>
              <Image src={singleGif.images.downsized_large.url} alt={title} />
            </ImageContainer>
            <Description> Url </Description>
            <DetailsField
              onChange={null}
              type="text"
              defaultValue={url}
              onClick={event => copyUrl(event.target, url)}
            />
            <Description> Tiny url </Description>
            <DetailsField
              onChange={null}
              type="text"
              defaultValue={tinyUrl}
              onClick={event => copyUrl(event.target, tinyUrl)}
            />
          </MainWrapper>
        </DetailsBg>
      )}
    </>
  );
};

export default Details;
