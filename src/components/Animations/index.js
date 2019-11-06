import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: scale(1);
  }

  33% {
    transform: scale(1.1);
  }

  66% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1,1);
  }`;


export { rotate };
