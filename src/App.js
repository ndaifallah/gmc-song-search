import React, { Component } from "react";
import "antd/dist/antd.css";
import SearchContainer from "./components/searchContainer";
import Checkout from "./components/checkout";
import Thanks from "./components/thanks";
import Search from "./components/search";
import Result from "./components/result";
import Cart from "./components/cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/checkout" component={Checkout}></Route>

          <Route path="/search" component={SearchContainer}></Route>
          <Route path="/Thanks" component={Thanks}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
