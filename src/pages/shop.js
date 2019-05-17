import React, { Component } from 'react'
import NavLinks from '../components/navigation/navbar';
import Footer from '../components/navigation/footer';

export default class Shop extends Component {
  render() {
    return (
      <div>
        <NavLinks />
        <h1>hello from the store</h1>
        <Footer />
      </div>
    )
  }
}
