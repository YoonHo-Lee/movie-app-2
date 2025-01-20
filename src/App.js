import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./css/App.css";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);

    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie, idx) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
                genres={movie.genres}
                summary={movie.summary}
                coverImage={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
