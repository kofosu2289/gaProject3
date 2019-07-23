import React from 'react';

import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import Products from './Products';
  
class CreateCategory extends React.Component {
  constructor(props){
    super(props);
    this.state={
      categories: []
    }
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
      
      <div className="cat-div">
      {this.props.categories.map((category)=> (
        <div key={category.id} className="print_cats" 
        onClick={()=>{
          this.props.history.push(`/products/${category.id}`)
        }}
        >
          <p>{category.name}</p>
          <img src={category.image_url} alt text="cat_img"/>
        </div>
      ))}
      </div>

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



