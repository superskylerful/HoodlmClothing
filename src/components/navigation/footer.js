import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="FooterLinks">
          <i class="fab fa-instagram" />
          <i class="fab fa-facebook-square" />
          <i class="fab fa-twitter-square" />
          <i class="fab fa-youtube" />
        </div>
        <div className="FooterTitle">
          <p>© 2019 | Hoodlm Clothing</p>
        </div>
      </div>
    );
  }
}
