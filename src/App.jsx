import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieHeader from './components/MovieHeader';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('Star Wars');
  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6892ecf2d23ab26901996e7e59132a26&query=${searchValue}}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);



  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <div
          className="col-8"
          id='headerDiv'
        >
          <MovieHeader heading='Movies' />
        </div>
        <div
          className= "col-4"
          id='searchBoxDiv'
        >
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
      <div className='row d-flex movieList'>
        <MovieList movies={movies}></MovieList>
      </div>
    </div>
  );
}

export default App;
