import React from 'react';
import { Route, Link } from 'react-router-dom';
import Account from './RegisterForm';

export default class Index extends React.Component {
  render() {

  
    return (
      <div className="Index">
        <nav>
          <Link to="/"></Link>
        </nav>
        <main>
          <Route path="/" render={() =>
            <Account
              handleLoginSubmit={this.handleLoginSubmit}
              registerForm={this.state.registerFormData}
              loginForm={this.state.loginFormData}
              handleSubmit={this.handleRegisterSubmit}
              handleRegisterChange={this.handleRegisterChange}
              handleLoginChange={this.handleLoginChange}
              currentUser={this.state.currentUser}
            />
          } />
        </main>
      </div>
    );
  }
}
