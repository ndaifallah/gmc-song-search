import { List, Button } from 'antd';
import React, { Component } from 'react';


class Cart extends Component {

    sum1 = () => {
        return this.props.panier.reduce((a, el) => el.price + a, 0)
    }

    sum2 = () => {
        let total = 0;

        this.props.panier.map(idx => {
            total += idx.price
        });

        return total;
    }
    render() {
        // console.log(this.props);
        return(<div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
                    <List style={{
                        marginTop: 100,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 500,
                    marginRight: 30,
                }}>
                    {this.props.panier.map(idx => <List.Item>
                        <List.Item.Meta title={idx.title}/>
                        <div>{idx.price}</div>
                    </List.Item>)}
                </List>
                <div>

                <h2 style={{display: 'block'}}>Total: {this.sum2()}</h2>
                <Button onClick={e => {
                    console.log(this.props);
                    this.props.history.push("/checkout", {
                        panier: this.props.panier
                    });
                }}>Checkout</Button>
                </div>
            </div>)
    }
}

export default Cart;