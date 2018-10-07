import React, {Component} from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import PropTypes from "prop-types";

export default class LandingPage extends Component {
  static propTypes = {
    loginUrl: PropTypes.string.isRequired,
    signUpUrl: PropTypes.string.isRequired,
    authenticityToken: PropTypes.string.isRequired,
    email: PropTypes.string,
    lastAction: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: (this.props.lastAction !== null) ? this.props.lastAction === 'login' : true
    }
  }

  toggleForms() {
    this.setState((state) => {
      return {showLoginForm: !state.showLoginForm};
    });
  }

  render() {
    const showLoginForm = this.state.showLoginForm;
    const authenticityToken = this.props.authenticityToken;

    const loginUrl = this.props.loginUrl;
    const email = this.props.email || '';

    const signUpUrl = this.props.signUpUrl;
    return (
      <div className='landing-page'>
        <h1>
          Welcome to Movies Rent App (with React.js)
        </h1>
        { showLoginForm ? (
          <LoginForm loginUrl={loginUrl} authenticityToken={authenticityToken} email={email}/>
        ) : (
          <SignUpForm signUpUrl={signUpUrl} authenticityToken={authenticityToken} email={email} />
        )}
        <a onClick={() => this.toggleForms()}>
          { showLoginForm ? 'Create account' : 'Login' }
        </a>
      </div>
    )
  }
}