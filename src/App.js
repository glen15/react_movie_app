import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoding: true,
    movies: []
  };

  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https:yts-Proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoding: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoding, movies } = this.state;
    return (
      <section className="container">
        {isLoding ? 
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div> : (
          <div className="movies">
            {movies.map(movie => (
        <Movie 
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        poster={movie.medium_cover_image}
        summary={movie.summary}
        genres={movie.genres}
            />   
        ))}
      </div>
      )}
    </section>
  )};
}

export default App;
