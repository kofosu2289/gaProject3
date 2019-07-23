import React from 'react';

export default class ProductView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="product-page">
        <h1>APP TITLE</h1>
        <form>
          <input
            type="text"
            name="search"
            placeholder="SEARCH"
          >
          </input>
          <button type="submit">Search</button>
        </form>
        <h2>PRODUCT NAME</h2>
      </div>
    )
  }
}