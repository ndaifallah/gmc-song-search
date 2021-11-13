import React, { Component } from "react";
class Thanks extends Component {
  render() {
    console.log(this.props);
    return (
      <h1>
        MERCI {this.props.location.state.name}
        {this.props.location.state.lastName} POUR VOTRE ACHAT{" "}
      </h1>
    );
  }
}

export default Thanks;
