import React from "react";
import PropTypes from "prop-types";
import "./css/Movie.css";

function Movie({ id, title, year, rating, genres, summary, coverImage }) {
  return (
    <div className="movie">
      <div className="movie__content">
        <img src={coverImage} alt={title} title={title} />
        <div className="movie__data">
          <span className="movie__year">{year}</span>
          <h4 className="movie__title">
            [{rating}/10] {title}
          </h4>
          <ul className="movie__genres">
            {genres.map((genre, idx) => (
              <li className="genres__genre" key={`${id}_${idx}`}>
                {genre}
              </li>
            ))}
          </ul>
          <span className="movie__summary">
            {summary.length > 160 ? `${summary.slice(0, 320)}...` : summary}
          </span>
        </div>
      </div>
      <hr />
      <div className="movie__footer">
        <span>abcdefg...</span>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
};

export default Movie;
