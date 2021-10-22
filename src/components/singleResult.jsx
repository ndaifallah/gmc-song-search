import React, { Component } from 'react'
import { Card } from 'antd'
class SingleResult extends Component {
    render() {
        return (
            <Card
                hoverable
                style={{ 
                    width: 200,
                    height: 300,
                    margin: 10
                }}
                cover={<img src={this.props.picture} />}
            >
                <Card.Meta title={this.props.song} description={this.props.singer}/>
            </Card>
        )
    }
}

export default SingleResult