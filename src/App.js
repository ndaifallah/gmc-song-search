import React, { Component } from "react";
import "antd/dist/antd.css";

import Search from "./components/search";
import Result from "./components/result";
import Cart from "./components/cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      songs_added: [],
      panier: [],
    };
  }

  dataCallback = (d) => {
    this.setState({
      data: d.results,
    });
  };
  addToCart0 = (name, artist, price) => {
    this.setState({
      songs_added: [
        ...this.state.songs_added,
        { name: name, artist: artist, price: price },
      ],
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/checkout">
            <h1>Hello world </h1>
          </Route>

          <Route path="/">
            <div
              className="App"
              style={{
                textAlign: "center",
              }}
            >
              <Search callbackFetch={this.dataCallback} />
              <br />
              <br />
              <br />
              <br />

              <Result data={this.state.data} getSong={this.addToCart0} />
              <Cart panier={this.state.songs_added} />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
