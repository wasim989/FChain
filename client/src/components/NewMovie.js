import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

export default function NewMovie({ onSubmit, onCancel }) {
  const [movieData, setMovieData] = useState({
    movieTitle: "",
    movieId: "",
  });

  const cancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(movieData);
  };

  return (
    <Fragment>
      <form onSubmit={submit}>
        <label htmlFor="movie-title">Movie Title2</label>
        <input
          onChange={(e) =>
            setMovieData({ ...movieData, movieTitle: e.target.value })
          }
          value={movieData.movieTitle}
          type="text"
          name="movie-title"
          id="movie-title"
        />
        <label htmlFor="movieId">Movie ID 2</label>
        <input
          onChange={(e) =>
            setMovieData({ ...movieData, movieId: e.target.value })
          }
          value={movieData.movieId}
          type="text"
          name="movieId"
          id="movieId"
        ></input>
        <input type="submit" value="Submit" />
      </form>
      <div className="">
        <button onClick={cancel}>cancel</button>
      </div>
    </Fragment>
  );
}
