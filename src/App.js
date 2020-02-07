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
import axios from 'axios';
import Navbar from './components/navigation/navbar'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fafacebooksquare } from '@fortawesome/free-solid-svg-icons';

// library.add(fafacebooksquare)

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
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

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios
    .get("https://api.devcamp.space/logged_in", {
      withCredentials: true
    }).then(response => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus;

      // If loggedIn and status LOGGED_IN => return data
      // If loggedIn status NOT_LOGGED_IN => update state
      // If not loggedIn and status LOGGED_IN => update state


      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
      } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        });
      } 
    })
    .catch(error => {
      console.log("Error", error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      <div className="app">
      <BrowserRouter>
        <div className="container">
          <Navbar
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout}
          />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            path="/auth"
            render={props => (
              <Auth
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
          {this.state.loggedInStatus === "LOGGED_IN" ? <Route path="/Admin" component={Admin} /> : 
          <div className="AccessDeniedPage">
            <div className="AccessDenied">
              <h1>403 Access Denied</h1>
              <div className="BackButton">
                <Link to="/">Back</Link>
                </div>
              </div>
            </div>}
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
