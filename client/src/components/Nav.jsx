import React from 'react';

import ProductCreate from './ProductCreate';
import { Link, Route } from 'react-router-dom';




import {withRouter} from 'react-router-dom'


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-nav">

        <nav>
          <ul className="nav-links">
            <li><Link to="/">Login/Register</Link></li>
            <li> <Link to="/home">home</Link></li>
            <li><Link to="/productcreate">Create Product</Link></li>
            {/* <Link to="/products/:id">Products</Link> */}
          </ul>
        </nav>
        <>
        </>
        <h2>Welcome</h2>
        <div className="app-title">
          <button id="logout" onClick={() => {
              localStorage.removeItem("jwt");
              this.props.history.push("/");
            }}>LOGOUT</button>
          <img id="cart-logo" src="http://i68.tinypic.com/28iwxnc.png" alt="cart" />

        </div>
      </div>

    )

  }
}

export default withRouter(Nav);
