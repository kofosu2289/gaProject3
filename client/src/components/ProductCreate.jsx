import React from 'react';
import axios from 'axios';



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
        price: null,
      },
    }
  }

  fetchProducts = async () => {
    const resp = await axios.get('http://localhost:3001/products');
    this.setState({
      product: resp.data.product,
    });
  }


  handleCreateSubmit = (ev) =>
    ev.preventDefault();
  this.create();
    }



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