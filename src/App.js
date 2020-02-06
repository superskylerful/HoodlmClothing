// TODO: Assign cart items to cookie
// TODO: Render cart items from cookie
// TODO: Remove cookie after checkout

// API for devcamp.space login returns {"status": "created"} on successful login
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import Shop from './pages/shop';
import Media from './pages/media';
import Blog from './pages/blog';
import hoodlmCart from './pages/hoodlmCart';
import Product from './pages/product';
import Auth from './pages/auth';
import Admin from './pages/admin';
import { Link } from "react-router-dom";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fafacebooksquare } from '@fortawesome/free-solid-svg-icons';

// library.add(fafacebooksquare)

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  render() {
    return (
      <div className="app">
      <BrowserRouter>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            path="/admin"
            render={props => (
              <Admin
                {...props}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
              />
            )}
          />

          <Route path="/Shop" component={Shop} />
          <Route path="/Media" component={Media} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Cart" component={hoodlmCart} />
          <Route path="/product/:id" component={Product} />
          <Route path="/Auth" component={Auth} />
          {/* {this.state.loggedIn === "LOGGED_IN" ? <Route path="/Admin" component={Admin} /> : 
          <div className="AccessDeniedPage">
            <div className="AccessDenied">
              <h1>403 Access Denied</h1>
              <div className="BackButton">
                <Link to="/">Back</Link>
                </div>
              </div>
            </div>} */}
        </Switch>
        </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;


{/* <React.Fragment>
<Navbar />
<Switch>
  <Route exact path="/" component={ProductList} />
  <Route path="/details" component={Details} />
  <Route path="/cart" component={Cart} />
  <Route component={Default} />
</Switch>
<Modal />
</React.Fragment> */}
