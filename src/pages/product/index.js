import React, { Component } from "react";
import api from "../../services/api";

import './style.css'

export default class Product extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const promise = api.get(`/products/${id}`);

    this.setState({ product: (await promise).data });
  }

  render() {
    const { product } = this.state;

    return (
      <div className="product-info">
        <strong>{product.title}</strong>
        <p>{product.description}</p>
        <a href={product.url}>{product.url}</a>
      </div>
    );
  }
}
