import React from 'react';
import './App.css';
import Account from './components/RegisterForm';
import { registerUser, loginUser, fetchCategories } from './services/api-helper';
import { Route, Link, Switch } from 'react-router-dom';
import CreateCategory from './components/CreateCategory';
import { withRouter } from 'react-router-dom';
import Products from './components/Products'

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
      categories: []
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

  componentDidMount = async () => {
    const categories = await fetchCategories();
    this.setState({
      categories: categories.categories
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Make it rain!</h1>
        <nav>
          <Link to="/"></Link>
          <Link to="/home"></Link>
          {/* <Link to="/products/:id">Products</Link> */}
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
          <Route exact path="/home" render={() => (
            <CreateCategory
              categories={this.state.categories}
            />)} />
          <Route path="/products/:id" render={(props) => {
            const id = parseInt(props.match.params.id);
            const category = this.state.categories.find(cat => cat.id === id);

            return <Products
              id={id}
              category={category}
            />
          }
          }
          // <CreateCategory id={props.match.params.category_id} />

          />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
