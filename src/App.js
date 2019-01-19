import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SiteHeader from './components/SiteHeader';
import Homepage from './pages/Homepage';
import ProductList from './pages/ProductList';
import "./sass/main.sass";

import PropTypes from 'prop-types'

const App = props => {
  return (  
      <Router>      
        <div id="app">
          <SiteHeader />
          <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/products" component={ProductList} />
          </Switch>     
        </div>  
      </Router>
  )
}

App.propTypes = {

}

export default App;


