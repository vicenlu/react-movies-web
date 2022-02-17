import React, { useEffect, useState } from 'react';
import {
  Link
} from 'react-router-dom';

function MoviesList() {

  // TODO: estudiar variables .env de un proyecto React
  const TMDB_BASE_URL = `https://api.themoviedb.org/3`;
  const constructUrlG = (path) => {
    return `${TMDB_BASE_URL}/movie/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}`;
  }
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(constructUrlG("popular"))
      .then((response) => response.json())
      .then((data) => { setMovies(data.results) });
  }, []);

  const moviesToShow = movies.map(item => {
    let url = `/movieDetail/${item.id}`;
    return (
      < Link to={url} state={{ movieData: item }}>
        <p>{item.title}</p>
      </Link>
    )
  });

  return (
    <>
      Soy Movies List!!
      {movies.length}
      Lista de pelis:
      {moviesToShow}
    </>
  );
}

export default MoviesList;
