import React, { useState } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import { Link } from 'react-router-dom';
import LogoImage from "../../assets/hoolmimg.jpg";
import axios from 'axios';
import { withRouter } from "react-router";

const Navbar = (props) => {

  const handleSignOut = () => {
    axios.delete("https://api.devcamp.space/logout", {
      withCredentials: true
    }).then(response => {
      if (response.status === 200) {
        props.history.push("/");
        props.handleSuccessfulLogout();
      }
      return response.data;
    }).catch(error => {
      console.log("Error signing out", error)
    })
  }

    return (
      <div className="NavBar">
        <div className="NavBarLeftColumn">
          <Link to="/" className="HoodlmLogo"><img src={LogoImage}/></Link>
        </div>
        <div className="NavBarCenterColumn">
          <ResponsiveMenu
          menuOpenButton={<div className="HamburgerCloseButton"> <i className="fas fa-bars" /> </div>}
          menuCloseButton={<div className="HamburgerOpenButton"><i className="fas fa-times" /></div>}
          changeMenuOn="850px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="small-menu-classname"
          menu={
            <ul className="NavBarLinkWrapper">
            <div className ="NavBarLinkListItems">
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/media">Media</Link></li>
              </div>
            </ul>
            }
          />
          </div>
          <div>
            {props.loggedInStatus === 'LOGGED_IN' ? <div className="LogoutButton"><a onClick={handleSignOut}>Sign Out</a></div> : null }
          </div>
          <div className="NavBarRightColumn">
            <Link to="/cart"><i className="fas fa-shopping-bag"></i></Link>
          </div>
      </div>
    )
}

export default withRouter(Navbar);