import React from 'react';




class CreateCategory extends React.Component {

  render() {
    return (
      <>
        <div className="searchbar">
          <input id="search"
            type="text"
            name="search"
            placeholder="SEARCH">
          </input>
        </div>
        <div className="catForm"></div>
        <input id="catImg"
          type="url"
          name="category-img"
          placeholder="CATEGORY IMAGE">
        </input>
        <button id="createcat">SUBMIT</button>
      </>
    )
  }
}

export default CreateCategory;



