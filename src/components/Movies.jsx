import React, { useEffect, useState } from "react";
import { getMovieList, getDetailMovie } from "../data/api";

const MoviesList = () => {
  const [popular, setPopular] = useState([]);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopular(result);
    });
  }, []);

  const onHandler = async (id) => {
    const detail = await getDetailMovie(id);
    setDetail(detail);
    console.log({ detail: detail });
  };

  return (
    <div>
      <div className="md:px-7 lg:px-14 mx-2 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1">
        {popular.map((movie, i) => (
          <div
            className="text-xl m-3 drop-shadow-xl shadow-lg bg-indigo-900 rounded-md w-auto"
            key={i}
          >
            <img
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
              className="rounded-md"
            />
            <div className="movie_title px-2">Judul : {movie.title}</div>
            <div className="movie_date px-2">
              Release : {movie.release_date}
            </div>
            <div className="movie_retting px-2">
              Rate : {movie.vote_average}
            </div>
            <div className="p-2">
              <label
                htmlFor="my-modal-5"
                className="btn rounded-md w-20 h-0 bg-green-700 p-2"
                onClick={() => onHandler(`${movie.id}`)}
              >
                Detail
              </label>
            </div>
          </div>
        ))}
      </div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal pt-20">
        <div className="modal-box rounded-sm md:w-9/12 max-w-5xl bg-indigo-900">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="md:flex">
            <img
              className="md:h-96 md:w-38 pt-8"
              src={`${process.env.REACT_APP_BASEIMGURL}/${detail.poster_path}`}
            />
            <div className="md:ml-20 text-slate-200">
              <p className="md:text-2xl text-xl pt-5">
                Judul Film : <span className="italic">{detail.title}</span>
              </p>
              <p className="text-xl mt-2">
                Status :{" "}
                <span className="bg-green-600 rounded-lg px-1">
                  {detail.status}
                </span>
              </p>
              <h1 className="text-xl">Release_date : {detail.release_date}</h1>
              <p className="text-xl">vote_average : {detail.vote_average}</p>
              <p className="text-xl">Homepage : {detail.homepage}</p>
              <p className="text-xl">
                Original Language : {detail.original_language}
              </p>
              <p className="text-xl hidden">Overview : {detail.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
