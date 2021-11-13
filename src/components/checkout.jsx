import React, { Component } from "react";
import { Card, Input, Button } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      adress: "",
    };
  }
  render() {
    console.log(this.props);
    return (
      <div className="site-card-border-less-wrapper">
        <Card title="Mon Panier" bordered={false} style={{ width: 300 }}>
          <h3>
            Merci de bien vouloir verifiez vos achats et effectuer les etapes
            ci-dessous
          </h3>
          <div>
            {this.props.location.state.panier.map((el) => {
              return (
                <h3>
                  {el.artist} {el.name} {el.price}
                </h3>
              );
            })}
          </div>
          <p>
            Total:
            {this.props.location.state.panier.reduce(
              (a, el) => el.price + a,
              0
            )}
          </p>
          <p>
            Sous-Total:
            {this.props.location.state.panier.reduce(
              (a, el) => (el.price + a) * 1.19,
              0
            )}
          </p>
          <Input
            size="large"
            placeholder="First name"
            prefix={<UserOutlined />}
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <br />
          <br />
          <Input
            placeholder="Last name"
            prefix={<UserOutlined />}
            onChange={(event) =>
              this.setState({ lastName: event.target.value })
            }
          />
          <br />
          <br />
          <Input
            size="small"
            placeholder="Adress"
            prefix={<HomeOutlined />}
            onChange={(event) => this.setState({ adress: event.target.value })}
          />
          <br />
          <br />
          <Button
            type="primary"
            block
            onClick={(e) => {
              console.log(this.props);
              this.props.history.push("/thanks", {
                name: this.state.name,
                lastName: this.state.lastName,
                adress: this.state.adress,
              });
            }}
          >
            Buy
          </Button>
        </Card>
      </div>
    );
  }
}

export default Checkout;
