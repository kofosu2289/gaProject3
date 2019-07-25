import React from 'react';


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

        {this.state.login === false &&
          <div className="reg">

            <form className="register-form" onSubmit={this.props.handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="USERNAME"
                value={this.props.registerForm.username}
                id="username"
                onChange={this.props.handleRegisterChange} />
              &nbsp;

              <input
                type="text"
                name="email"
                placeholder="EMAIL"
                value={this.props.registerForm.email}
                id="email"
                onChange={this.props.handleRegisterChange} />

              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={this.props.registerForm.password}
                id="password"
                onChange={this.props.handleRegisterChange} />
              <input className="register-button" type="submit" value="Register!" />
              <br></br>
              <button onClick={() => { this.setState({ login: false }) }}>SIGN UP</button>
              &nbsp; &nbsp;
              <button onClick={() => this.setState({ login: true })}>LOGIN</button>
            </form>
          </div>
        }

        {this.state.login === true &&
          <div className="login">
            <h3>LOGIN</h3>

            <form className="login-form" onSubmit={this.props.handleLoginSubmit}>
              <input
                type="text"
                name="username"
                placeholder="USERNAME"
                value={this.props.loginForm.username}
                id="username"
                onChange={this.props.handleLoginChange}
              />

              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={this.props.loginForm.password}
                id="psasword"
                onChange={this.props.handleLoginChange}
              />
              <button>LOGIN</button>
            </form>

          </div>
        }
      </div>
    )
  }
}

export default Account;

