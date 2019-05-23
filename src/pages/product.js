import React, { Component } from "react";
import NavBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import { storeProducts } from "../Data";
import { Link } from "react-router-dom";
import { isUndefined } from "util";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      cart_items: []
    };
  }

  handleAddItem = () => {
    if (!isUndefined(this.props.location.state)) {
      this.setState({ cart_items: this.props.location.state.cart_items });
    }
    const item = this.state.product[0];
    const addMe = [
      { id: item.id, image: item.image, name: item.name, price: item.price }
    ];
    this.setState({
      cart_items: [...this.state.cart_items, ...addMe]
    });
  };

  renderProduct = () => {
    return this.state.product.map(product => {
      return (
        <div key={product.id} className="show-page-content">
          <div className="ProductWrapper">
            <div className="ProductImage">
              <img src={product.image} />
            </div>
            <div className="ProductContent">
              <div className="ProductTitle">{product.name}</div>
              <div className="ProductDescription">
                <li>{product.description[0]}</li>
                <li>{product.description[1]}</li>
                <li>{product.description[2]}</li>
                <li>{product.description[3]}</li>
                <li>{product.description[4]}</li>
                <li>{product.description[5]}</li>
              </div>
              <div className="ProductPrice">
                {product.qty === 0 ? (
                  <h2>Sold Out</h2>
                ) : (
                  <h2>${Number(product.price).toFixed(2)}</h2>
                )}
              </div>
              <div className="ProductFooterWrapper">
                <div className="ProductSize">
                  {/* <div className="SizeButton">
                    <h3>size</h3>
                  </div> */}
                </div>
                <div className="AddToCart">
                  <h3 onClick={this.handleAddItem}> Add To Cart</h3>
                  </div>
                  <div className="SecondaryButtons">
                      <div className="GoToCart">
                      <Link
                        to={{
                          pathname: `/Cart/${product.id}`,
                          state: {
                            cart_items: this.state.cart_items
                          }
                        }}
                      >
                          
                        Go to Cart
                      </Link>
                      </div>
                    <div className="BackButton">
                      <Link
                        to={{
                          pathname: "/shop",
                          state: {
                            cart_items: this.state.cart_items
                          }
                        }}
                      >
                        Back To Shop
                      </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  componentWillMount() {
    if (!isUndefined(this.props.location.state)) {
      this.setState({
        cart_items: this.props.location.state.cart_items,
        product: storeProducts.filter(item => {
          return item.id === this.props.match.params.id;
        })
      });
    } else {
      this.setState({
        cart_items: [],
        product: storeProducts.filter(item => {
          return item.id === this.props.match.params.id;
        })
      });
    }
  }

  render() {
    console.log("props recieved by Product page: ", this.state.cart_items);
    return (
      <div>
        <NavBar />
        <div className="ItemContent">{this.renderProduct()}</div>
        <Footer />
      </div>
    );
  }
}
