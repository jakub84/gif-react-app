import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GridWrapper from './components/Wrappers/GridWrapper';
import SearchBar from './components/SearchBar';
import localGifs from './components/Source/gifs';
import GifsList from './components/Gifs/index';

const App = () => {
  const [data, setData] = useState([]);


  const onInputChange = (searchValue) => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=vPFgAGhW54kZX5TzaZQxDUM0Wd8EbmlH&q=${searchValue}&offset=0&rating=G&lang=en`,
      )
      .then(response => setData(response.data.data));
  };
  return (
    <GridWrapper column nowrap>
      <SearchBar onInputChange={onInputChange} />
      {data.length > 0 ? <GifsList allGifs={data} /> : 'no data'}
    </GridWrapper>
  );
};

export default App;
