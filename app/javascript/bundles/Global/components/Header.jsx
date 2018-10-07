import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    logOutUrl: PropTypes.string.isRequired,
  };

  render() {
    const logOutUrl = this.props.logOutUrl;
    return (
      <header className='header'>
        <h2>
          Movies Rent App (with React.js)
        </h2>
        <a rel='nofollow' data-method='delete' href={logOutUrl} className='logout'>
          Logout
        </a>
      </header>
    );
  }
}