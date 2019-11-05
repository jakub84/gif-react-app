import React from 'react';
import styled, { keyframes } from 'styled-components';
import Loader from '../Loader';
import logo from '../../assets/images/logo.svg';


const SearchForm = styled.form`
display: flex;
`;
const SearchInput = styled.input`
  padding: 10px 10px;
  display: inline-block;
  border-top-left-radius:15px;
  border-bottom-left-radius: 15px;
  border: 1px solid lightgray;
  border: ${props => (props.dark ? '2px solid #fff' : '2px solid lightgray')};
  border-right: none;
  background-color: transparent;
  &:focus {
    color: ${props => (props.dark ? 'white' : '#000')};
    padding: 10px 30px;
    background-color: #fff;
  }
  @media (max-width: 500px) {
    padding:10px;
    &:focus {
    color: ${props => (props.dark ? 'white' : '#000')};
    padding: 10px;
    background-color: #fff;
  }
  }
`;


const animateLogo = keyframes`
  0% {
    transform: rotate(0deg);
  }

  29% {
    transform: rotate(0deg) scale(1,1);
  }

  30% {
    transform: rotate(30deg) scale(1,1);
  }

  31% {
    transform: rotate(-10deg) scale(1,1);
  }

  32% {
    transform: rotate(0deg) scale(1,1);
  }
  59% {
    transform: rotate(0deg) scale(1,1);
  }

  60% {
    transform: scale(1, 1.1);
  }
  61% {
    transform: scale(1, 0.9);
  }
  62% {
    transform: scale(1,1);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const LogoContainer = styled.div`
  margin-bottom:30px;
  width:300px;
  animation: ${animateLogo} 10s linear infinite;
`;

const LogoImg = styled.img`
width:100%;
max-width: ${props => (props.dark ? '100%' : '200px')};
`;

const SubmitButton = styled.input`
  padding: 10px 20px;
  border-top-right-radius:15px;
  border-bottom-right-radius: 15px;
  border: 2px solid #FFAF43;
  border-left: none;
  background-color: #FFAF43;
  :hover {
    background-color: #FF5925;
    border: 2px solid #FF5925;
    border-left: none;
    color: #fff;
  }
  :disabled {
    background-color: lightgrey;
    border: 2px solid lightgrey;
    color:grey;
  }
`;

const SearchWrapper = styled.div`
  background-color: ${props => (props.dark ? '#000' : '#fff')};
  height: ${props => (props.dark ? '100vh' : '300px')};
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SearchBar = ({
  onInputChange, loading, handleSubmit, fetchedData, inputValue,
}) => (
  <SearchWrapper dark={fetchedData.length === 0 && !inputValue}>

    <LogoContainer>
      <LogoImg dark={fetchedData.length === 0} src={logo} alt="logo" />
    </LogoContainer>
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        placeholder="search gifs..."
        onChange={(event) => {
          onInputChange(event.target.value);
        }}
      />
      <SubmitButton type="submit" value="search" disabled={inputValue.length === 0} />
    </SearchForm>
    {loading && <Loader />}
  </SearchWrapper>
);

export default SearchBar;
