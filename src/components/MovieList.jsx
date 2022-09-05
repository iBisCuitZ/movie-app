import React from 'react'
import './MovieList.css'
function MovieList(props) {
  return (
    <>
        {props.movies?.map((movie, index) => 
        <div className="image-container">
            <img src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} alt="" />
        </div>
        )}
    </>
  )
}

export default MovieList;