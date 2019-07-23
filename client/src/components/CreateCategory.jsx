import React from 'react';

class CreateCategory extends React.Component {
}

return (
  <div className="searchbar">
    <input id="search"
      type="text"
      name="search"
      placeholder="SEARCH">
    </input>
  </div>
  <div className="catForm">
  <h1>ADD CATEGORY</h1>
  <input id="catName"
    type="text"
    name="category-name"
    placeholder="CATEGORY NAME">
  </input>
  <input id="catImg"
    type="url"
    name="category-img"
    placeholder="CATEGORY IMAGE">
  </input>
  <button id="createcat">SUBMIT</button>
  </div>

export default CreateCategory;



