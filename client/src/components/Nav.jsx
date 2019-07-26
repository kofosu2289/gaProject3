import React from 'react';
import {withRouter} from 'react-router-dom'
import { Link, Route } from 'react-router-dom';


import ProductCreate from './ProductCreate';







class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <nav className="app-nav">
        <Link to="/home"><img id="cart-logo" src="http://i68.tinypic.com/28iwxnc.png" alt="cart" /></Link>
        <h2>Welcome</h2>
        <Link className="prods" to="/products">All Products</Link>
        </nav>

    )

  }
}

export default withRouter(Nav);
