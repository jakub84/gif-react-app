import React from 'react';
import styled from 'styled-components';
import Loader from '../Loader';

const SearchInput = styled.input`
  padding: 10px 20px;
  border-top-left-radius:15px;
  border-bottom-left-radius: 15px;
  border: 1px solid lightgray;
  border: ${props => (props.dark ? '2px solid #fff' : '2px solid lightgray')};
  background-color: transparent;
  &:focus {
    color: ${props => (props.dark ? 'white' : '#000')};
    padding: 10px 30px;
    background-color: #fff;
  }
`;

const SubmitButton = styled.input`
  padding: 10px 20px;
  border-top-right-radius:15px;
  border-bottom-right-radius: 15px;
  border: ${props => (props.dark ? '2px solid #lightgray' : '2px solid lightgray')};
  :hover {
    background-color: lightgreen;
  }
`;

const SearchWrapper = styled.div`
  background-color: ${props => (props.dark ? '#000' : '#fff')};
  height: ${props => (props.dark ? '100vh' : '200px')};
  width: 100%;
  text-align: center;
  /* padding-top: 30px; */
  /* margin-bottom: 50px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = ({
  onInputChange, loading, handleSubmit, fetchedData,
}) => (
  <SearchWrapper dark={fetchedData.length === 0}>
    <form onSubmit={handleSubmit}>
      <SearchInput
        placeholder="search gifs..."
        onChange={(event) => {
          onInputChange(event.target.value);
        }}
      />
      <SubmitButton type="submit" />
      {loading && <Loader />}
    </form>
  </SearchWrapper>
);

export default SearchBar;
