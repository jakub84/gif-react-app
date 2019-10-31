import React, { useState } from 'react';
import axios from 'axios';
import GridWrapper from './components/Wrappers/GridWrapper';
import SearchBar from './components/SearchBar';
import GifsList from './components/Gifs/index';

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const onInputChange = (searchValue) => {
    setInputValue(searchValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length === 0) return;
    setLoading(true);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=vPFgAGhW54kZX5TzaZQxDUM0Wd8EbmlH&q=${inputValue}&offset=0&rating=G&lang=en`,
      )
      .then((response) => {
        setLoading(false);
        setData(response.data.data);
      });
  };
  return (
    <GridWrapper dark={data.length === 0} column nowrap>
      <SearchBar
        inputValue={inputValue}
        onInputChange={onInputChange}
        fetchedData={data}
        loading={loading}
        handleSubmit={handleSubmit}
      />

      {!loading && inputValue.length === 0 ? <GifsList allGifs={data} /> : 'no data'}
    </GridWrapper>
  );
};

export default App;
