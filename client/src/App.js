import React from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerFormData: {
        name: '',
        password: '',
      },
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Make it rain!</h1>
        <RegisterForm 
            registerForm={this.state.registerFormData}
            handleSubmit={this.handleRegisterSubmit}
            handleChange={this.handleRegisterFormChange}
          />
      </div>
    );
  }
}

export default App;
