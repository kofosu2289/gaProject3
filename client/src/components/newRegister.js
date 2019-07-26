import React from 'react';
import { Link, Route } from 'react-router-dom';
import Login from './newLogin'
export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    }
  }

  render() {
    return (
      <div>
      <div className="formz">
      <Link to='/register'> <button onClick={() => { this.setState({ login: false }) }}>Register</button></Link>
        <Link to='/login'><button onClick={() => this.setState({ login: true })}>Login</button></Link>

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
        </div>
        <Route path='/login' component={Login}/>
        </div>
    )
  }
}