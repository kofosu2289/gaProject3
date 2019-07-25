import React from 'react';
import axios from 'axios';


export default class ProductEdit extends React.Component {
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


  handleCreateSubmit = (ev) => {
    ev.preventDefault();
    this.create();
  }



  create = async () => {
    const data = this.state.formData;
    const resp = await axios.post('http://localhost:3000/products', data)
    const products = resp.data.product;
    this.setState(prevState => ({
      products: [...prevState.products, products],
      formData: {
        name: '',
        description: '',
        image_url: '',
      },
      isEditing: false,
    }));
  }

  edit = (id) => {
    this.setState(prevState => {
      const { name, description, image_url } = prevState.products.find(product => product.id === id);
      return {
        formData: { name, description, image_url },
        editingId: Id
      };

    });
  }
  delete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/products/${id}`)
    this.setState(prevState => ({
      products: prevState.products.filter((product) => (
        product.id !== parseInt(id)
      ))
    }))
    console.log(res)
  }

  update = async () => {
    const data = this.state.formData;
    const resp = await axios.put('http://localhost:3000/products/' + this.state.editingId, data);
    const product = resp.data;
    this.setState(prevState => ({
      products: prevState.products.map(t => (t.id === product.id ? product : t)),
      formData: {
        name: '',
        description: '',
        image_url: '',
      },
      editingId: null,
    }));
  }

  handleChange = (ev) => {
    const { target: { name, value } } = ev;
    this.setState(prevState = ({
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
  componentDidMount() {
    this.fetchProducts();
  }

  update = async () => {
    const data = this.state.formData;
    const resp = await axios.put('http://localhost:3000/products/' + this.state.editingId, data);
    const product = resp.data;
    this.setState(prevState => ({
      products: prevState.products.map(t => (t.id === product.id ? product : t)),
      formData: {
        name: '',
        description: '',
        image_url: '',
      },
      editingId: null,
    }));
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <h3>EDIT PRODUCT</h3>
        <form>
          <input
            type="text"
            name="name"
            placeholder="PRODUCT NAME"
            onChange={this.handleChange}
            value={this.state.formData} />

          <input
            type="text"
            name="description"
            placeholder="PRODUCT DESCRIPTION"
            onChange={this.handleChange}
            value={this.state.formData} />

          <input
            type="text"
            name="image_url"
            placeholder="PRODUCT IMAGE URL"
            onChange={this.handleChange}
            value={this.state.formData} />
        </form>
        <button>Submit</button>
      </div>
      
    )
  }
}