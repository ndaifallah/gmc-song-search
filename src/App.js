import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';  
import {store} from './redux/reducer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './components/checkout';
import SearchContainer from './components/searchContainer';
import AboutMe from './components/aboutme';

class App extends Component {
  

  render(){
    return (
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchContainer}>
          </Route>

          <Route path="/checkout" component={Checkout} />
          <Route path="/aboutme" component={AboutMe} />
        </Switch>
      </Router>
       </Provider>
    );
  }
}

export default App;
