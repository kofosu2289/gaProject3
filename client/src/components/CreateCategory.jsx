import React from 'react';
import {withRouter} from 'react-router-dom';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';

import Products from './Products';
import EditCategory from './EditCategory';
import Nav from './Nav'
  
class CreateCategory extends React.Component {
  constructor(props){
    super(props);
    this.state={
      categories: []
    }
  }

render(){

  return (
    <div className="createCat">
      <div className="cat-div">
      {this.props.categories.map((category)=> (
        <div key={category.id} className="print_cats" 
        onClick={()=>{
          this.props.history.push(`/products/category/${category.id}`)
        }}
        >
          <p>{category.name}</p>
          <img src={category.image_url} alt text="cat_img" />
        </div>
      ))}
      </div>

      <EditCategory />
    </div>
    )
  }
}
export default withRouter(CreateCategory);




