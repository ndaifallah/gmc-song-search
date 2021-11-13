import React, { Component } from "react";
import { Button } from "antd";
class Cart extends Component {
  render() {
    console.log("ygygkyfnyufk,gkygyftfjjtf", this.props);
    return (
      <div
        style={{
          width: 200,
          padding: 20,
          position: "fixed",
          right: 0,
          top: 0,
          background: "#b8c3bd",
        }}
      >
        <h2>Mon panier</h2>
        <ul>
          {this.props.panier.map((el) => (
            <li>
              {el.artist} {el.name} {el.price}
            </li>
          ))}
        </ul>
        <h2>Total:{this.props.panier.reduce((a, el) => el.price + a, 0)} </h2>
        <Button
          onClick={(e) => {
            console.log(this.props);
            this.props.history.push("/checkout", { panier: this.props.panier });
          }}
        >
          Checkout
        </Button>
      </div>
    );
  }
}

export default Cart;
