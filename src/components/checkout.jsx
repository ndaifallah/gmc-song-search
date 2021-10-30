import React, { Component } from 'react';
import { Input } from 'antd';
import { Button } from "antd";
class Checkout extends Component{
constructor(props){
    super(props);
    this.state={
        nom:"",
        prenom:"",
        adresse:"",
    }

}

render(){
    console.log(this.props)
    console.log(this.props.location.state.panier)

    let priceTable1=this.props.location.state.panier.map(el =>el.price1)
    let Total1=0;
    priceTable1.map(el=> Total1=Total1 + el)
    console.log(Total1)

    return(<div style={{
        width: 700,
        height: "80%",
        padding: 20, 
        position: 'fixed',
        right: 200,
        top: 0,
        backgroundColor: 'yellow',
       

    }}>
<h1>Récap Mes Achats</h1>
<ul>
                {this.props.location.state.panier.map(el => <li>{el.song1 + "---------" + el.price1 + " USD"}</li>)}
            </ul>
            
            <div>Total HT = {Total1} </div>
            <div>Total TTC = {Total1 + Total1*0.19} </div>
<br />
<br /><br /><br />
<div>Information client: </div>
<br />





<div>Nom <Input placeholder="Basic usage"  onChange={e=>this.setState({nom:e.target.value})}/> </div>
<br />
<div>Prénom <Input placeholder="Basic usage" onChange={e=>this.setState({prenom:e.target.value})} /></div>
<br />
<div>Adresse <Input placeholder="Basic usage"  onChange={e=>this.setState({adresse:e.target.value})}/></div>
<br />

<Button onClick ={e=>{
                console.log(this.state);

                //window.history.go("/checkout");
                this.props.history.push("/thanks", {
                name: this.state.nom,
                prenom: this.state.prenom,
                adresse: this.state.adresse,
                totalttc: Total1 * 1.19 ,
               });
            }}> Next</Button>


    </div>
    )

} }
export default Checkout;