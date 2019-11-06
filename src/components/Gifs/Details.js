import React from 'react';
import styled from 'styled-components';
import ButtonUrl from '../Buttons/ButtonUrl';
import SocialMedia from '../Buttons/SocialMedia';
import CloseIcon from '../../assets/images/delete.svg';
import { rotate } from '../Animations';

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

const CloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  outline: none;
  border-bottom-left-radius: 10px;
  background-color: orange;
  height: 40px;
  width: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const IconImg = styled.img`
  width: 80%;
  height: auto;
  :hover {
    animation: ${rotate} 0.4s linear forwards;
  }
`;

const MainWrapper = styled.div`
  border: 5px solid orange;
  width: 90%;
  max-width: 500px;
  padding: 30px;
  max-height: 600px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 500px) {
    padding: 60px 10px 10px 10px;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  @media (max-height: 600px) {
    display: none;
  }
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  max-width: 400px;
  max-height: 300px;
  @media (max-width: 600px) {
    max-height: 200px;
    max-width: 100%;
  }

`;

const ImageTitle = styled.h3`
  display: inline-block;
  width: 80%;
  font-size: 18px;
  font-family: "shadow";
  color: black;
  margin: 15px 0 5px 0;
  font-weight: 800;
  padding-left: 5px;
  text-align: center;
`;

const BtnsContainer = styled.div`
  width: 80%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Details = ({ singleGif, details, setDetails }) => {
  const { title } = singleGif;

  return (
    <>
      {details && (
        <DetailsBg>
          <MainWrapper>
            <CloseBtn
              type="button"
              value="Close"
              onClick={() => setDetails(!details)}
            >
              <IconImg src={CloseIcon} alt="close" />
            </CloseBtn>
            <ImageTitle>{title.toUpperCase()}</ImageTitle>
            <ImageContainer>
              <Image src={singleGif.images.downsized_large.url} alt={title} />
            </ImageContainer>
            <BtnsContainer>
              <ButtonUrl
                value={singleGif.images.fixed_height_downsampled.url}
                id="copyUrl"
              />
              <SocialMedia
                urlToShare={singleGif.images.fixed_height_downsampled.url}
              />
            </BtnsContainer>
          </MainWrapper>
        </DetailsBg>
      )}
    </>
  );
};

export default Details;
