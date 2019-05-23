import React, { Component } from "react";
import NavBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import EmptyCart from "../components/cart/emptyCart";
import { isUndefined } from "util";

export default class hoodlmCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart_items: [],
      cart_total: 0
    };
  }

  componentDidMount() {
    this.renderCartTotal()
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

  renderCartItems = () => {
    return this.state.cart_items.map(cart_item => {
      return (
        <div className="CartItemContainer" key={cart_item.id}>
          <div className="CartImage">
            <img src={cart_item.image} />
          </div>
          <div className="CartContent">
            <div className="CartTitle">{cart_item.name}</div>
            <div className="CartPrice">${Number(cart_item.price).toFixed(2)}</div>
          </div>
        </div>
      );
    });
  };

  renderCartTotal = () => {
    let rollingTotal = 0
    if(this.state.cart_items) {
    this.state.cart_items.map(item => {
      rollingTotal += item.price
    })
    this.setState({
      cart_total: rollingTotal
    })} else {
      this.setState({
        cart_total: 0
      })
    }
  }

  render() {
    console.log("cart Items: ", this.state.cart_items);
    console.log("toal: ", this.state.cart_total);
    return (
      <div>
        <NavBar />

        {this.state.cart_items !== "" ? (
            this.renderCartItems()
            
        ) : (
          <EmptyCart />
        )}
        {this.state.cart_items == "" ? null : 
            <div className="CartTotal">
              Total: ${Number(this.state.cart_total).toFixed(2)}
            </div>}
        <Footer />
      </div>
    );
  }
}
