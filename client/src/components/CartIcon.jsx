import React from "react";

function CartIcon() {
  return (
    <div className="cart-logo">
      <img
        id="logo"
        src="http://oi66.tinypic.com/311wbbd.jpg"
        alt="cartlogo"
        onClick={() => {
          this.props.history.push("/home");
        }}
      />
    </div>
  );
}

export default withRouter(CartIcon);
