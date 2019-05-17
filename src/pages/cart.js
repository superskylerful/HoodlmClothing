import React, { Component } from 'react';
import NavBar from '../components/navigation/navbar';
import Footer from '../components/navigation/footer';

export default class cart extends Component {
  render() {
    return (
      <div>
        <NavBar />
            <h1>Hello from the cart</h1>
        <Footer />
      </div>
    )
  }
}
