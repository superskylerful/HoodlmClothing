import React, { useState, useEffect } from "react";
import NavBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import { storeProducts } from "../Data";
import { Link } from "react-router-dom";
import { isUndefined } from "util";

const Product = props => {
  const [product, setProduct] = useState([])
  const [cart_items, setCartItems] = useState([])

  const handleAddItem = () => {
    if (!isUndefined(props.location.state)) {
      setCartItems(props.location.cart_items);
    }
    const item = product[0];
    const addMe = [
      { id: item.id, image: item.image, name: item.name, price: item.price }
    ];
    setCartItems([...cart_items, ...addMe]);
  };

  const renderProduct = () => {
    return product.map(product => {
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
                  {product.qty === 0 ? <h3>Sold Out</h3> :
                  <h3 onClick={handleAddItem}> Add To Cart</h3>
                  }
                  </div>
                  <div className="SecondaryButtons">
                      <div className="GoToCart">
                      <Link
                        to={{
                          pathname: `/Cart/${product.id}`,
                          state: {
                            cart_items: cart_items
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
                            cart_items: cart_items
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

  useEffect(() =>{
    // if (props.location.state.cart_items) {
    //   setCartItems(props.location.cart_items.filter(item => {
    //       return item.id === props.match.params.id;
    //     })
    //   );
    // } else {
    //   setCartItems([]
    //   );
    // }

    setProduct(storeProducts.filter(item => {
      return item.id === props.match.params.id
    }))
  },[])


    console.log("props recieved by Product page: ", cart_items);
    return (
      <div>
        <NavBar />
        <div className="ItemContent">{renderProduct()}</div>
        <Footer />
      </div>
    );
}

export default Product