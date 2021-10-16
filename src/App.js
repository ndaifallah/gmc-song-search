import React, { Component } from "react";
import "antd/dist/antd.css";
import Results from "./components/results";
import Search from "./components/search";
import Singleresult from "./components/singleresult";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  dataCallback = (d) => {
    console.log(d);
    this.setState({ data: d });
  };
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <Search callbackFetch={this.dataCallback} />
      </div>
    );
  }
}

export default App;
