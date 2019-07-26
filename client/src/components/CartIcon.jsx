import React from "react";

function CartIcon() {
  return (
    <div className="cart-logo">
      {/* <Link to="/home"> */}
      <img
        id="logo"
        src="http://oi66.tinypic.com/311wbbd.jpg"
        alt="cartlogo"
        onClick={() => {
          this.props.history.push("/home");
        }}
      />
      {/* </Link> */}
    </div>
  );
}

export default withRouter(CartIcon);
