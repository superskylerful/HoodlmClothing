import React, { Component } from 'react'
import NavLinks from '../components/navigation/navbar';
import Footer from '../components/navigation/footer';
import { mockData } from "../mockData";
import {Link} from 'react-router-dom';

export default class Shop extends Component {
  constructor(){
    super();
  }

  renderProducts = () => {
    return mockData.map(product => {
      return (
        <div className="ItemWrapper">
          <div className="Item">
            <div className="ItemImage">
              <img src={product.image} />
            </div>
            <div className="ItemTitle">
              <h1>{product.name}</h1>
              <Link to={`/product/${product.id}`}>click</Link>
            </div>
            <div className="ItemPrice">
              {product.qty === 0 ? <h2>Sold Out</h2> :
              <h2>${Number(product.price).toFixed(2)}</h2>}
            </div>
          </div>
        </div>
      )
    })
  }
  
  render() {
    return (
      <div>
        <NavLinks />
  
        <div className="ProductsTitle">
        <h1>Products</h1>
        </div>
        <div className="ItemContent">
        {this.renderProducts()}
        </div>
        <Footer />
      </div>
    )
  }
}
