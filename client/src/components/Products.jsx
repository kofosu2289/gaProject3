import React from 'react';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  
  render() {
    return (
      <div>
          hello
          {JSON.stringify(this.props.category)}
      </div>
    )
  }
}