import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({title, summary, poster, year, genres }){
    return(
    <div className="moive">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">{genres.map((genre, index) => (
                 <li key={index} className="genres__genre">{genre}</li>
            ))}
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div> 
    );
}

Movie.prototype ={
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;