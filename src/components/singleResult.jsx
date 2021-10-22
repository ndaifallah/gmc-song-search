import React, { Component } from 'react'
import { Card } from 'antd'

class SingleResult extends Component {
    render() {
        return (
            <div>
                <Card
                hoverable
                style={{ 
                    width: 200,
                    height: 300,
                    margin: 10
                }}
                cover={<img style={{ height: 150 }}    src={this.props.picture} />}
            >
                <Card.Meta title={this.props.song} description={this.props.singer}/>
                <audio style={{ 
                    width: 200, height: 30,}} controls><source src={this.props.audio} /> Your browser does not support the audio tag.
                </audio>
 

            </Card>
            </div>
        )
    }
}

export default SingleResult