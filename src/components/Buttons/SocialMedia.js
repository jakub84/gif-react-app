import React from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,

} from 'react-share';
import { rotate } from '../Animations';


const SocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  margin: 5px;
  cursor: pointer;
  :hover {
    animation: ${rotate} 0.4s linear forwards;
  }
`;

const SocialMedia = ({ urlToShare }) => (
  <SocialWrapper>
    <IconContainer>
      <FacebookShareButton url={urlToShare}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>
    </IconContainer>
    <IconContainer>
      <TwitterShareButton url={urlToShare}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>
    </IconContainer>

    <IconContainer>
      <LinkedinShareButton url={urlToShare}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
    </IconContainer>

    <IconContainer>
      <PinterestShareButton media={urlToShare} url={urlToShare}>
        <PinterestIcon size={40} round />
      </PinterestShareButton>
    </IconContainer>
  </SocialWrapper>
);

export default SocialMedia;
