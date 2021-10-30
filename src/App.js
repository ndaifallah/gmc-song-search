import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Checkout from './components/checkout.jsx';
import SearchContainer from './components/searchContainer';
import Search from './components/search';
import Result from './components/result';
import Cart from './components/cart';
import AboutMe from './components/aboutme';
import Thanks from './components/thanks';




//import { Switch } from 'antd';

//let myHistory = createBrowserHistory()
class App extends Component {
 
  render(){
    console.log(this.state);
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={SearchContainer}>

        </Route >
        <Route path="/checkout" component={Checkout}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/thanks" component={Thanks}/>
        
       
        </Switch>
      </Router>
      
    );
  }
}

export default App;
