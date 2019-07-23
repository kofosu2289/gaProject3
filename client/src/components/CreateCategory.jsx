import React from 'react';
import {fetchCategories} from '../services/api-helper'
import{withRouter} from 'react-router-dom';
import axios from 'axios';
  
class CreateCategory extends React.Component {
  constructor(props){
    super(props);
    this.state={
      categories: []
    }
  }

  componentDidMount = async () => {
    const categories = await fetchCategories();
    this.setState({
      categories: categories.categories
    })
  }
  // componentDidMount = async() => {
  //   const cats = await fetchCategories();
  //   console.log(cats.categories);
  // }

render(){
  return (
    <div className="createCat">
      <input id="search"
        type="text"
        name="search"
        placeholder="SEARCH">
      </input>

      {this.state.categories.map((e)=> (
        <div key={e.id} className="print_cats">
          <p>{e.name}</p>
          <img src={e.image_url} />
        </div>
      ))}

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
    )
  }
}
export default withRouter(CreateCategory);



