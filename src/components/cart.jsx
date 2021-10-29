import { Button } from "antd";
import React, { Component } from "react";


class Cart extends Component {
    render(){
        console.log(this.props);

        
                let priceTable=this.props.panier.map(el =>el.price1)
           // console.log(priceTable)
let Total=0;
priceTable.map(el=> Total=Total + el)
console.log(Total)
        return (<div style={{
            width: 300,
            //height: "100%",
            padding: 20, 
            position: 'fixed',
            right: 0,
            top: 0,
            backgroundColor: 'red'
           

        }}>
            <h2>Mon Panier</h2>
            
            <ul>
                {this.props.panier.map(el => <li>{el.song1 + "---------" + el.price1 + " USD"}</li>)}
            </ul>
            
            <div>Total = {Total}</div>
            <br />
            <br />
            <Button onClick ={e=>{
                window.history.go("/checkout");
            }}> Checkout</Button>
        </div>);
    }
}

export default Cart;