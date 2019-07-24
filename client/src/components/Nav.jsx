import React from 'react';


export default function Nav() {
  return (
    <div className="app-nav">
    {/* <h1>Make it rain!</h1> */}
    <h2>WELCOME, USER</h2>
    <div className="app-title">
      <button id="logout">LOGOUT</button>
      <img id="cart-logo" src="http://i68.tinypic.com/28iwxnc.png" alt="cart" />
    </div>
    <div className="searchbar">
      <input id="search"
        type="text"
        name="search"
        placeholder="SEARCH">
      </input>
      </div>
      </div>

  )
}