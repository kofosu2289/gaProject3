import React from 'react';
import { fetchProducts } from '../services/api-helper';
import Nav from './Nav';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: this.props.id
    }
  }

  componentDidMount = async () => {
    const products = await fetchProducts();
    console.log(products);
    this.setState({
      products: products.products
    })
  }

  render() {
    debugger;
    return (

      <>
        <Nav />
        <div className="products">
          {this.state.products.map((product) => (
            (this.state.id === product.categoryId &&
              <div className="one-product" key={product.id}>
                <h3>{product.name}</h3>
                <img src={product.image_url} />
                <p>{product.description}</p>
                <h4>${product.price}</h4>
              </div>
            )
          ))}
        </div>
      </>

    )
  }
}