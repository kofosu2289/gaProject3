import React from 'react';
import {withRouter} from 'react-router-dom'

class Nav extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="app-nav">
      {/* <h1>Make it rain!</h1> */}
      {/* <h2>{this.props.loginFormData.username}</h2> */}
      <h2>Welcome</h2>
      <div className="app-title">
          <button id="logout" onClick={() => { localStorage.removeItem('jwt'); this.props.history.push('/')  }}>LOGOUT</button>
        <img id="cart-logo" src="http://i68.tinypic.com/28iwxnc.png" alt="cart" />

      </div>
      {/* <div className="searchbar">
        <input id="search"
          type="text"
          name="search"
          placeholder="SEARCH">
        </input>
        </div> */}
        </div>
    )
  }
}

export default withRouter(Nav);