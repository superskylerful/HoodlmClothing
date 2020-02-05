import React, { useState, useEffect } from 'react'
import NavLinks from '../components/navigation/navbar';
import Footer from '../components/navigation/footer';
import { storeProducts } from "../Data";
import {Link} from 'react-router-dom';
import { isUndefined } from "util";

const Shop = props => {
  const [cart_items, setCartItems] = useState([]);

  useEffect(() => {
    if (isUndefined(props.location.state)) {
      setCartItems({
        cart_items: ""
      });
    } else {
      setCartItems({
        cart_items: props.location.cart_items
      });
    }
  })


  const renderProducts = () => {
    return storeProducts.map(product => {
      return (
        <div className="ItemWrapper" key={product.id}>
          <Link to={{
            pathname: `/product/${product.id}`,
            state: {
              cart_items: cart_items
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
  
    console.log("props recieved by Shop page: ", cart_items)
    return (
      <div>
        <NavLinks />
  
        <div className="ProductsTitle">
        <h1>Products</h1>
        </div>
        <div className="ItemContent">
        {renderProducts()}
        </div>
        <Footer />
      </div>
    )
}


export default Shop