import React from 'react';
import './App.css';
import Account from './components/RegisterForm';
import { registerUser, loginUser } from './services/api-helper';
import { Route, Link } from 'react-router-dom';
import CreateCategory from './components/CreateCategory';
import { withRouter } from 'react-router-dom';
import ProductCreate from './components/ProductCreate';

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
    const auth = 'Bearer ' + userData.token;
    localStorage.setItem('jwt', userData.token);
    localStorage.setItem('jwtToken', auth);
  }

  handleRegisterSubmit = async (ev) => {
    ev.preventDefault();
    await registerUser(this.state.registerFormData);
    this.handleLogin();
    this.setState({
      registerFormData: {
        username: '',
        email: '',
        password: '',
      },
    });
    this.props.history.push('/home');
  }

  handleLoginSubmit = async (ev) => {
    ev.preventDefault();
    const userData = await loginUser(this.state.loginFormData);
    this.setState({
      currentUser: userData.user,
      loginFormData: {
        username: '',
        password: ''
      }
    })
    const auth = 'Bearer ' + userData.token;
    localStorage.setItem('jwt', userData.token);
    localStorage.setItem('jwtToken', auth);
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="App">
        <h1>Make it rain!</h1>
        <Link to="/"></Link>
        <Route exact path="/" render={() =>
          <Account
            handleLoginSubmit={this.handleLoginSubmit}
            registerForm={this.state.registerFormData}
            loginForm={this.state.loginFormData}
            handleSubmit={this.handleRegisterSubmit}
            handleRegisterChange={this.handleRegisterChange}
            handleLoginChange={this.handleLoginChange}
          />
        } />
        <Link to="/home"></Link>
        <Route path="/home" render={() => <CreateCategory />} />
        //For Testing
        <ProductCreate />
      </div>
    );
  }
}

export default withRouter(App);
