import React, { Component } from 'react'
import NavLinks from '../components/navigation/navbar';
import Footer from '../components/navigation/footer';
import { storeProducts } from "../Data";
import {Link} from 'react-router-dom';
import { isUndefined } from "util";

export default class Shop extends Component {
  constructor(props){
    super(props);

    this.state = {
      cart_items: []
    }
  }

  componentWillMount() {
    if (isUndefined(this.props.location.state)) {
      this.setState({
        cart_items: ""
      });
    } else {
      this.setState({
        cart_items: this.props.location.state.cart_items
      });
    }
  }

  renderProducts = () => {
    return storeProducts.map(product => {
      return (
        <div className="ItemWrapper" key={product.id}>
          <Link to={{
            pathname: `/product/${product.id}`,
            state: {
              cart_items: this.state.cart_items
            }
            }}>
          <div className="Item">
            <div className="ItemImage">
              <img src={product.image} />
            </div>
            <div className="ItemTitle">
              <h1>{product.name}</h1>
            </div>
            <div className="ItemPrice">
              {product.qty === 0 ? <h2>Sold Out</h2> :
              <h2>${Number(product.price).toFixed(2)}</h2>}
            </div>
          </div>
          </Link>
        </div>
      )
    })
  }
  
  render() {
    console.log("props recieved by Shop page: ", this.state.cart_items)
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
