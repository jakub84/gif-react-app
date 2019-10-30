import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 10px 20px;
  border-radius: 15px;
  border: 1px solid lightgray;
`;

const SearchWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 30px;
`;

const SearchBar = ({ onInputChange }) => (
  <SearchWrapper>
    <SearchInput
      onChange={(event) => {
        onInputChange(event.target.value);
      }}
    />
  </SearchWrapper>
);

export default SearchBar;
