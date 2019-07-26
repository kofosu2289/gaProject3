import React from "react";

import { withRouter } from "react-router-dom";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      loggedIn: false
    };
  }

  render() {
    return (
      <div className="front-page">
        <h1>
          BENJAMIN<span>$</span>
        </h1>
        {!this.props.currentUser && (
          <div className="formz">
            <div className="login-reg-buttons">
              <button
                onClick={() => {
                  this.setState({ login: false, loggedIn: true });
                }}
              >
                Register
              </button>
              <button
                onClick={() => {
                  this.setState({ login: true, loggedIn: true });
                }}
              >
                Login
              </button>
            </div>
            {this.state.login ===
              false /*this.state.loggedIn === false &&*/ && (
              <div className="reg">
                <h3 id="reg-label">Create an Account</h3>
                <form
                  className="register-form"
                  onSubmit={this.props.handleSubmit}
                >
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={this.props.registerForm.username}
                    id="username"
                    onChange={this.props.handleRegisterChange}
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={this.props.registerForm.email}
                    id="email"
                    onChange={this.props.handleRegisterChange}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={this.props.registerForm.password}
                    id="password"
                    onChange={this.props.handleRegisterChange}
                  />
                  <input type="submit" value="Sign Up!" />
                </form>
              </div>
            )}

            {this.state.login === true /*this.state.loggedIn=== false &&*/ && (
              <div className="login">
                <h3>Login</h3>

                <form
                  className="login-form"
                  onSubmit={this.props.handleLoginSubmit}
                >
                  <label htmlFor="name">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={this.props.loginForm.username}
                    id="username"
                    onChange={this.props.handleLoginChange}
                  />
                  <label htmlFor="name">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={this.props.loginForm.password}
                    id="password"
                    onChange={this.props.handleLoginChange}
                  />
                  {/* <button>Login</button> */}
                  <input type="submit" value="login" />
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Account);
