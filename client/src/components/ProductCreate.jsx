import React from 'react';

export default class ProductCreate extends React.Component {
  render() {
    return (
      <div>
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
        <h2>ADD PRODUCT</h2>
        <h3>EDIT PRODUCT</h3>
        <form>
          <input
            type="text"
            name="name"
            placeholder="PRODUCT NAME"
          >
          </input>
          <input
            type="text"
            name="description"
            placeholder="PRODUCT DESCRIPTION"
          >
          </input>
          <input
            type="text"
            name="url"
            placeholder="PRODUCT IMAGE URL"
          >
          </input>
        </form>
        <button>Submit</button>
      </div>
    )
  }
}