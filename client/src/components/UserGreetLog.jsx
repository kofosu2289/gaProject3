import React from "react";
import { withRouter } from 'react-router-dom';

 function UserGreetLog() {
  <div className="userGreet">
    <h2>WELCOME, USER</h2>
    <button id="logout" onClick={() => { localStorage.removeItem("jwt"); this.props.history.push('/'); }}>
      LOGOUT
    </button>
  </div>;
}

export default withRouter(UserGreetLog);