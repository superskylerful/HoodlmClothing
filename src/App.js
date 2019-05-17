import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import Shop from './pages/shop';
import Media from './pages/media';
import Blog from './pages/blog';
import Cart from './pages/cart';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fafacebooksquare } from '@fortawesome/free-solid-svg-icons';

// library.add(fafacebooksquare)

class App extends Component {
  render() {
    return (
      <div className="app">
      <BrowserRouter>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Media" component={Media} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Cart" component={Cart} />
          <Route component={Error} />
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
