import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class LoginForm extends Component {

  static propTypes = {
    loginUrl: PropTypes.string.isRequired,
    authenticityToken: PropTypes.string.isRequired,
    email: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = { email: this.props.email || '' };
  }

  updateEmail(email) {
    this.setState({ email })
  }

  render() {
    const loginUrl = this.props.loginUrl;
    const authenticityToken = this.props.authenticityToken;
    const email = this.state.email;
    return (
      <div className="login-form">
        <form action={loginUrl} method="post">
          <input type="hidden"
                 name="authenticity_token"
                 value={authenticityToken}
          />
          <label htmlFor="email">
            Email
            <input id="email"
                   type="text"
                   name="email"
                   value={email}
                   onChange={(e) => this.updateEmail(e.target.value)}
                   autoComplete="off"
                   placeholder="email@domain.com"
            />
          </label>
          <label htmlFor="password">
            Password
            <input id="password"
                   type="password"
                   name="password"
                   placeholder={"******"}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}