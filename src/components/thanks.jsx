import React, { Component } from 'react';

 class Thanks extends Component{
render(){
    console.log("ddd",this.props.location.state)
    return(
        <div>

<h1> nom:{this.props.location.state.name}</h1>
<h1>prenom: {this.props.location.state.prenom}</h1>
<h1>adresse: {this.props.location.state.adresse}</h1>
<h1> Total TTC: {this.props.location.state.totalttc}</h1>
<br /><br />
<h1> Merci pour fidelité</h1>

        </div>
       
    )

} }
export default Thanks;