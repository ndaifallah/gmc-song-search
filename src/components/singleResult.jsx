import React, { Component } from "react";
import { Card } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

class Singleresult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
    };
  }
  render() {
    return (
      <div>
        <Card
          hoverable
          style={{ width: 180, margin: 10 }}
          cover={<img src={this.props.pic} alt="" />}
          actions={[
            <PlusCircleOutlined
              onClick={(e) => {
                this.props.addsong(
                  this.props.trackName,
                  this.props.artistName,
                  this.props.price
                );
              }}
            />,
          ]}
        >
          <Card.Meta title={this.props.title} author={this.props.author} />
        </Card>
      </div>
    );
  }
}

export default Singleresult;
