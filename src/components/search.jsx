import React, { Component } from "react";
import { Input, Button } from "antd";

import { AppleFilled } from "@ant-design/icons";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  onClickSearch = async (e) => {
    let value = this.state.search;
    let resp = await fetch(`https://itunes.apple.com/search?term=${value}`);
    let data = await resp.json();
    this.props.callbackFetch(data);
  };

  render() {
    return (
      <div>
        <h1>My songs</h1>
        <Input
          size="large"
          type="text"
          placeholder="Hello Apple"
          prefix={<AppleFilled />}
          onChange={(evt) => this.setState({ search: evt.target.value })}
          value={this.state.search}
          style={{ width: 400 }}
        ></Input>
        <Button
          type="primary"
          shape="round"
          icon={<AppleFilled />}
          size="large"
          style={{ width: 150 }}
          onClick={(e) => this.onClickSearch(e)}
        >
          Search
        </Button>
      </div>
    );
  }
}

export default Search;
