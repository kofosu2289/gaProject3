import React from 'react';
import {Route,Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    }
  }

  render() {
    return (
      <div className="formz">
        <button onClick={() => { this.setState({ login: false }) }}>Register</button>
        <button onClick=
        {() => {
          this.setState({ login: true })

        }
          
        }
        >Login</button>

        {this.state.login === false &&
          <div className="reg">
            <h3>Register Form</h3>
            <form className="register-form" onSubmit={this.props.handleSubmit}>
              <label
                htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.props.registerForm.username}
                id="username"
                onChange={this.props.handleRegisterChange} />

              <label
                htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={this.props.registerForm.email}
                id="email"
                onChange={this.props.handleRegisterChange} />
              <label
                htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.props.registerForm.password}
                id="password"
                onChange={this.props.handleRegisterChange} />
              <input type="submit" value="Sign Up!" />
            </form>
          </div>
        }

        {this.state.login === true &&
          <div className="login">
            <h3>Login</h3>
    
            <form className="login-form" onSubmit={this.props.handleLoginSubmit}>
            <label
                htmlFor="name">Username</label>
              <input
                type="text"
                name="username"
                value={this.props.loginForm.username}
                id="username"
                onChange={this.props.handleLoginChange}
              />
              <label
                htmlFor="name">Password</label>
              <input
                type="password"
                name="password"
                value={this.props.loginForm.password}
                id="psasword"
                onChange={this.props.handleLoginChange}
              />
              <button>Login</button>
            </form>
          </div>
        }
      </div>
    )
  }
}

export default withRouter(Account);

