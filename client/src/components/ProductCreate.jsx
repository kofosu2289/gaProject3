import React from 'react';
import axios from 'axios';

import { verifyToken } from '../services/api-helper';
import Nav from './Nav';


export default class ProductCreate extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      editingId: null,
      formData: {
        name: '',
        description: '',
        image_url: '',
        price: '',
        category: ''
      },
    }
  }

  fetchProducts = async () => {
    const resp = await axios.get('https://agile-falls-46666.herokuapp.com/products');
    this.setState({
      products: resp.data.products,
    });
  }


  handleCreateSubmit = (ev) => {
    ev.preventDefault();
    this.create();
  }


  create = async () => {
    debugger;
    const data = this.state.formData;
    
    const category = this.props.categories.find(cat => cat.id === parseInt(data.category, 10));
   

    const resp = await axios.post(`https://agile-falls-46666.herokuapp.com/products/category/${category.id}`, data);

    const products = resp.data.product;
    this.setState(prevState => ({
      products: [...prevState.products, products],
      formData: {
        name: '',
        description: '',
        image_url: '',
        price: '',
      },
      isEditing: false,
    }));

  }

  edit = (id) => {
    this.setState(prevState => {
      const { name, description, image_url, price } = prevState.products.find(product => product.id === id);
      return {
        formData: { name, description, image_url, price },
        editingId: id
      };
    });
  }

  delete = async (id) => {
    const res = await axios.delete(`https://agile-falls-46666.herokuapp.com/products/${id}`)
    this.setState(prevState => ({
      products: prevState.products.filter((product) => (
        product.id !== parseInt(id)
      ))
    }))
    // console.log(res)
  }

  update = async () => {
    const data = this.state.formData;
    const resp = await axios.put('https://agile-falls-46666.herokuapp.com/products/' + this.state.editingId, data);
    const product = resp.data;
    this.setState(prevState => ({
      products: prevState.products.map(t => (t.id === product.id ? product : t)),
      formData: {
        name: '',
        description: '',
        image_url: '',
        price: '',
      },
      editingId: null,
    }));
  }

  handleChange = (ev) => {
    const { target: { name, value } } = ev;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      }
    }));
  }

  handleUpdateSubmit = (ev) => {
    ev.preventDefault();
    this.update();
  }

  componentDidMount = async () => {
    debugger;
    this.fetchProducts();
    // console.log(this.state.products)
    const user = await verifyToken();
    this.setState({
      currentUser: user
    })
  }

  render() {
    // console.log(this.state);
    return (

      <div>
        {/* <Nav /> */}
        <h3>ADD PRODUCT</h3>

        {this.state.editingId !== null && (
          <form onSubmit={this.handleUpdateSubmit}>
            <input
              type="text"
              name="name"
              placeholder="PRODUCT NAME"
              onChange={this.handleChange}
              value={this.state.formData.name} />


            <input
              type="text"
              name="description"
              placeholder="PRODUCT DESCRIPTION"
              onChange={this.handleChange}
              value={this.state.formData.description} />

            <input
              type="text"
              name="image_url"
              placeholder="PRODUCT IMAGE URL"
              onChange={this.handleChange}
              value={this.state.formData.image_url} />

            <input
              type="text"
              name="price"
              placeholder="PRODUCT PRICE"
              onChange={this.handleChange}
              value={this.state.formData.price} />
            <input type="submit" value=" Update Category" />
          </form>
        )}
        {this.state.editingId === null && (
          <form onSubmit={this.handleCreateSubmit}>
            <input
              type="text"
              name="name"
              placeholder="PRODUCT NAME"
              onChange={this.handleChange}
              value={this.state.formData.name} />


            <input
              type="text"
              name="description"
              placeholder="PRODUCT DESCRIPTION"
              onChange={this.handleChange}
              value={this.state.formData.description} />

            <input
              type="text"
              name="image_url"
              placeholder="PRODUCT IMAGE URL"
              onChange={this.handleChange}
              value={this.state.formData.image_url} />

            <input
              type="text"
              name="price"
              placeholder="PRODUCT PRICE"
              onChange={this.handleChange}
              value={this.state.formData.price} />
            <select onChange ={this.handleChange} name ='category'>
              {this.props.categories.map(cat => (
              
                <option value = {cat.id}>{cat.name}</option>
              ))}
            </select>


            <input type="submit" value=" CREATE PRODUCT" />
          </form>
        )}
        {this.state.products.map(product => (
          <div key={product.id}>
            <h2>{product.name}<br></br>
              <img src={product.image_url} />
              <br></br>
              {product.description}
              <br></br>
              ${product.price}
            </h2>
            <button onClick={() => this.edit(product.id)}>Edit Product</button>
            <button onClick={() => this.delete(product.id)}>Delete Product</button>
          </div>
        ))}
      </div>
    )
  }
}

