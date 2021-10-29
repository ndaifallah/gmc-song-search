import React, { Component } from 'react';
import { List } from "rc-field-form"; 

class Cart extends Component {





    render(){
        console.log(this.props);
        return (
        <div 
        style={{
            width:250,
            padding:20,
            position:'fixed',
            right:0,
        }}
        >
            <h2>mon panier</h2>
            <ul>
                {this.props.panier.map(el=><>
                    <li>{el.trackName}</li>
                    <h2>{el.artistName}</h2>
                </> )}
            </ul>
            total price : {this.props.panier.reduce((el,b)=>b+el.trackPrice, 0  )}
                           
        </div>
        
        );
    }
}

export default Cart;