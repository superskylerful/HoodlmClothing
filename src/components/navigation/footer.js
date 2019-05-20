import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="FooterLinks">
          <i className="fab fa-instagram" />
          <i className="fab fa-facebook-square" />
          <i className="fab fa-twitter-square" />
          <i className="fab fa-youtube" />
        </div>
        <div className="FooterTitle">
          <p>© 2019 | Hoodlm Clothing</p>
        </div>
      </div>
    );
  }
}
