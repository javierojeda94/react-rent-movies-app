import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

export default class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    rentUrl: PropTypes.string.isRequired,
    newMovieUrl: PropTypes.string.isRequired,
    authenticityToken: PropTypes.string.isRequired,
  };

  render() {
    const rentUrl = this.props.rentUrl;
    const authenticityToken = this.props.authenticityToken;
    const newMovieUrl = this.props.newMovieUrl;
    const movies = this.props.movies.map((movie) =>
      <Movie key={movie.id}
             id={movie.id}
             name={movie.name}
             synopsis={movie.synopsis}
             rating={movie.rating}
             selfUrl={movie.self_path}
             editUrl={movie.edit_path}
             rentUrl={rentUrl}
             authenticityToken={authenticityToken}
      />
    );
    return (
      <div className='movie-list'>
        <h1>Movies List:</h1>
        <a href={newMovieUrl}>Add movie</a>
        {movies}
      </div>
    );
  }
}