import React from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import Account from './components/RegisterForm';
import ProductCreate from './components/ProductCreate';
import { registerUser, loginUser, fetchCategories, verifyToken } from './services/api-helper';
import EditCategory from './components/EditCategory';
import Products from './components/Products'
import Nav from './components/Nav'


import './App.css';


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
    this.setState({
      currentUser: userData.user,
    });
    const auth = 'Bearer ' + userData.token;
    localStorage.setItem('jwt', userData.token);
    localStorage.setItem('jwtToken', auth);
    localStorage.setItem('userData', userData.user);
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
    localStorage.setItem('userData', userData.user);

    this.props.history.push('/home');
  }

  logout = () => {

    localStorage.clear();
    this.setState({
      currentUser: null
    })
    this.props.history.push('/')
  }

  componentDidMount = async () => {
    const categories = await fetchCategories();
    this.setState({
      categories: categories.categories,
    })

    const user = await verifyToken();
    if (user) {
      this.setState({
        currentUser: user
      })
    }
  }


  render() {
    let display
    if (!this.state.currentUser) {
      display =
        <>
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
        </>
    }
    else {
      display =
        <>
          <Link className="title" to="/home"><h1 className = 'money'>BENJAMINS</h1></Link>
          <Nav />
          <button onClick={this.logout}>Logout</button>
          <nav>
            <Link to="/"></Link>
            <Link to="/home"></Link>
            <Link to="/products/:id"></Link>
            {/* <Link to="/products">All Products</Link> */}
          </nav>
          <main>
            <Route exact path="/home" render={() => (
              <EditCategory
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
            } />
            <Route exact path="/products" render={() => (
              <ProductCreate
                categories={this.state.categories} />)} />
          </main>
        </>
    }
    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default withRouter(App);
