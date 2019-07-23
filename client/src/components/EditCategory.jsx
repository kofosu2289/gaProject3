import React from 'react';

class EditCategory extends React.Component {
}

return (
  <div className="searchbar">
    <input id="search"
      type="text"
      name="search"
      placeholder="SEARCH">
    </input>
  </div>
  <div className="catForm"></div>
  <h1>EDIT CATEGORY</h1>
  <input id="catName"
    type="text"
    name="category-name"
    placeholder="CATEGORY NAME">
  </input>

  <input id="catImg"
    type="img"
    name="category-img"
    placeholder="CATEGORY IMAGE">
  </input>
  <button id="editcat">SUBMIT</button>
)
export default EditCategory;



