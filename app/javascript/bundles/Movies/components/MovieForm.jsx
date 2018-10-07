import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class MovieForm extends Component {

  static propTypes = {
    movie: PropTypes.object,
    action: PropTypes.string.isRequired,
    authenticityToken: PropTypes.string.isRequired,
    submitted: PropTypes.bool,
    sentName: PropTypes.string,
    sentSynopsis: PropTypes.string,
    sentRating: PropTypes.string,
  };

  constructor(props) {
    super(props);
    const movie = (this.props.submitted) ? {
      id: this.props.movie.id,
      name: this.props.sentName,
      synopsis: this.props.sentSynopsis,
      rating: this.props.sentRating,
    } : this.props.movie;
    this.state = { movie }
  }

  updateName(newName) {
    this.setState((prevState) => {
      let movie = prevState.movie;
      movie.name = newName;
      return { movie }
    })
  }

  updateSynopsis(newSynopsis) {
    this.setState((prevState) => {
      let movie = prevState.movie;
      movie.synopsis = newSynopsis;
      return { movie }
    })
  }

  updateRating(newRating) {
    this.setState((prevState) => {
      let movie = prevState.movie;
      movie.rating = newRating;
      return { movie }
    })
  }

  render() {
    const action = this.props.action;
    const movie = this.state.movie;
    const authenticityToken = this.props.authenticityToken;
    return (
      <div className="movie-form">
        <form action={action} method="post">
          { movie.id && <input type="hidden" name="_method" value="put"/> }
          <input type="hidden" name="authenticity_token" value={authenticityToken}/>
          <label htmlFor="name">
            Name
            <input id="name"
                   type="text"
                   name="movie[name]"
                   value={movie.name}
                   onChange={(e) => this.updateName(e.target.value)}
                   autoComplete="off"
            />
          </label>
          <label htmlFor="synopsis">
            Synopsis
            <textarea id="synopsis"
                      name="movie[synopsis]"
                      rows="5"
                      value={movie.synopsis}
                      onChange={(e) => this.updateSynopsis(e.target.value)} />
          </label>
          <label htmlFor="rating">
            Rating
            <select id="rating"
                    name="movie[rating]"
                    value={movie.rating}
                    onChange={(e) => this.updateRating(e.target.value)}>
              <option value="G">G</option>
              <option value="PG">PG</option>
              <option value="PG-13">PG-13</option>
              <option value="R">R</option>
              <option value="NC-17">NC-17</option>
            </select>
          </label>
          <button type="submit">Save changes</button>
        </form>
      </div>
    );
  }
}