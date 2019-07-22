import React from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
import { registerUser, loginUser } from './services/api-helper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerFormData: {
        username: '',
        email: '',
        password: '',
      },
      loginFormData: {
        username: '',
        password: ''
      },
      currentUser: null,
    }
  }

  handleRegisterChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      }
    }));
  }

  handleLoginChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value
      }
    }));
  }

  handleLogin = async () => {
    const userData = await loginUser(this.state.registerFormData);
    console.log(userData);
    this.setState({
      currentUser: userData.user,
    });
    localStorage.setItem('jwt', userData.token);
  }

  handleRegisterSubmit = async (ev) => {
    ev.preventDefault();
    await registerUser(this.state.registerFormData);
    this.handleLogin();
    this.setState({
      registerForm: {
        name: '',
        password: '',
      },
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Make it rain!</h1>
        <RegisterForm 
            registerForm={this.state.registerFormData}
            loginForm={this.state.loginFormData}
            handleSubmit={this.handleRegisterSubmit}
            handleRegisterChange={this.handleRegisterChange}
            handleLoginChange={this.handleLoginChange}
          />
      </div>
    );
  }
}

export default App;
