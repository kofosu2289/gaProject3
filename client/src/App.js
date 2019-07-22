import React from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';

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
      }
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
  // handleRegisterSubmit = async (ev) => {
  //   ev.preventDefault();
  //   const user = await createUser(this.state.registerFormData);
  //   console.log(user)
  //   this.setState({
  //     registerForm: {
  //       name: '',
  //       password: '',
  //     },
  //   });
  // }

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
