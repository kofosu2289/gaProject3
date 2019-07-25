import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

class EditCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      editingId: null,
      formData: {
        name: '',
        image_url: '',
      }
    }
  }

  fetchCategories = async () => {
    const resp = await axios.get('http://localhost:3001/categories');
    this.setState({
      categories: resp.data.categories,
    });
    console.log(this.state.categories);
  }

  handleCreateSubmit = (ev) => {
    ev.preventDefault();
    this.create();
    console.log(this.state.formData)
  }

  create = async () => {
    const data = this.state.formData;
    const resp = await axios.post('http://localhost:3001/categories', data)
    const categories = resp.data.categories;
    this.setState(prevState => ({
      categories: [...prevState.categories, categories],
      formData: {
        name: '',
        image_url: '',
      },
      isEditing: false,
    }));
  }

  edit = (id) => {
    this.setState(prevState => {
      const { name, image_url } = prevState.categories.find(category => category.id === id);
      return {
        formData: { name, image_url },
        editingId: id
      };
    });
  }

  delete = async (id) => {
    const resp = await axios.delete(`http://localhost:3001/categories/${id}`)
    this.setState(prevState => ({
      categories: prevState.categories.filter((category) => (
        category.id !== parseInt(id)
      ))
    }))
    console.log(resp)
  }

  update = async () => {
    const data = this.state.formData;
    const resp = await axios.put('http://localhost:3001/categories/' + this.state.editingId, data);
    const category = resp.data;
    this.setState(prevState => ({
      categories: prevState.categories.map(t => (t.id === category.id ? category : t)),
      formData: {
        name: '',
        image_url: ''
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
  
  componentDidMount() {
    this.fetchCategories();
  }

  render() {

    return (
      <div>
      
        <div className='catz'>
        {this.state.categories.map(category => (
          <div 
          className="each-cat"
          key={category.id} 
          // onClick={()=>{
          //   this.props.history.push(`/products/${category.id}`)
          // }}
          >
            <h3>{category.name}</h3>
            <img src={category.image_url} />
          <button onClick={() => this.edit(category.id)}>Edit Category</button>
          <button onClick={() => this.delete(category.id)}>Delete Category</button>
          </div>
        ))} </div>

{this.state.editingId !== null && (
      <form onSubmit={this.handleUpdateSubmit}>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.formData.name} />
          <input
          type="text"
          name="image_url"
          onChange={this.handleChange}
          value={this.state.formData.image_url} />
        <input type="submit" value="Update Category"/>
      </form>
      )}
    {this.state.editingId === null && (
      <form onSubmit={this.handleCreateSubmit}>
        <input
          type="text"
          name="name"
          placeholder="category name"
          onChange={this.handleChange}
          value={this.state.formData.name} />
        <input
          type="text"
          name="image_url"
          placeholder="category URL"
          onChange={this.handleChange}
          value={this.state.formData.image_url} />
      <input type="submit" value="Create Category" />
      </form>
        )}
        </div>
            )
          }
        }

export default withRouter(EditCategory);
                
                
                
 