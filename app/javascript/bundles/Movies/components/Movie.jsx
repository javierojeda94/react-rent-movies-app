import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Movie extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    selfUrl: PropTypes.string.isRequired,
    editUrl: PropTypes.string.isRequired,
    rentUrl: PropTypes.string.isRequired,
    authenticityToken: PropTypes.string.isRequired,
  };

  rentMovie(id) {
    const rentUrl = this.props.rentUrl;
    const authenticityToken = this.props.authenticityToken;
    const params = {
      id: id,
      authenticity_token: authenticityToken
    };
    axios.post(rentUrl, params)
      .then(response => {
        response = response.data;
        if(response.rent) {
          window.location.href = '/movies';
        } else {
          window.location.reload();
        }
      })
      .catch(error => console.error(error));
  }

  render() {
    const id = this.props.id;
    const name = this.props.name;
    const synopsis = this.props.synopsis;
    const rating = this.props.rating;
    const selfUrl = this.props.selfUrl;
    const editUrl = this.props.editUrl;
    return (
      <div className='movie'>
        <p className='name'>{name} [ <em className='rating'>{rating}</em> ]</p>
        <p className='synopsis'>{synopsis}</p>
        <div className='options'>
          <a href={selfUrl} className='option details'>Details</a>
          <a className='option rent' onClick={(e) => this.rentMovie(id)}>Rent</a>
          <a href={editUrl} className='option edit'>Edit</a>
        </div>
      </div>
    );
  }
}