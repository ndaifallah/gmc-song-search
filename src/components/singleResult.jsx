import React, { Component } from 'react'
import { Card } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { connect } from 'react-redux';
class SingleResult extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let dispatch = this.props.dispatch;
        return (
            <Card
                hoverable
                style={{ 
                    width: 200,
                    height: 350,
                    margin: 10
                }}
                cover={<img src={this.props.picture} />}
                actions={[
                    <PlusCircleOutlined onClick={e => {
                        this.props.addSong(
                        {
                            title: this.props.song,
                            price: this.props.price,
                            hello: "world"
                        });
                        dispatch({type: "add_to_cart",
                        info: {
                            title: this.props.song,
                            price: this.props.price,
                        }
                    })
                    }} />
                ]}
            >
                <Card.Meta title={this.props.song} description={this.props.singer}/>
            </Card>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        // my_cart: state
    }
}

export default connect(mapStateToProps, null)(SingleResult)