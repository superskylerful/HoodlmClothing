import React, { useState, useEffect } from "react";
import NavBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import EmptyCart from "../components/cart/emptyCart";
import { Link } from "react-router-dom";
import { isUndefined } from "util";

const HoodlmCart = props => {
  const [cart_items, setCartItems] = useState([]);
  const [cart_total, setCartTotal] = useState(0);

  useEffect(() => {
    renderCartTotal();

    if (isUndefined(props.location.state)) {
      setCartItems([]);
    } else {
      setCartItems(
        props.location.state.cart_items
      );
    }

  });

  const renderCartItems = () => {
    return cart_items.map(cart_item => {
      return (
        <div className="CartItemContainer" key={cart_item.id}>
          <div className="CartImage">
            <img src={cart_item.image} />
          </div>
          <div className="CartContent">
            <div className="CartTitle">{cart_item.name}</div>
            <div className="CartPrice">
              ${Number(cart_item.price).toFixed(2)}
            </div>
          </div>
        </div>
      );
    });
  };

  const renderCartTotal = () => {
    let rollingTotal = 0;
    if (cart_items) {
      cart_items.map(item => {
        rollingTotal += item.price;
      });
      setCartTotal(rollingTotal);
    } else {
      setCartTotal(0);
    }
  };

  return (
    <div>
      {/* <NavBar /> */}
      {cart_items.length > 0 ? renderCartItems() : <EmptyCart />}
      {cart_items.length > 0 ?  (
        <div className="CartTotal">Total: ${Number(cart_total).toFixed(2)}</div>
      ) : null}
      <div className="ReturnShopping">
        <Link to="/shop">Continue Shopping</Link>
      </div>
      {/* <div className="CheckoutButton">
        <button type="button">Checkout</button>
      </div> */}
      <Footer />
    </div>
  );
};

export default HoodlmCart;
