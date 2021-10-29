import React, { Component } from 'react'
import { Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
class SingleResult extends Component {
    render() {
        console.log(this.props)
        return (
            <Card
        hoverable
    style={{ width: 200,
        height: 350,
    margin: 18,
    }}
    cover={<img src={this.props.picture} />}
    //boutton ajouter
    actions={[
        <PlusOutlined onClick={e =>{
             let information={
                 song1: this.props.song,
                  price1: this.props.price,
             }
             this.props.addSong(information)
            }} />,
      ]}
  >
    <Card.Meta title={this.props.song} description={this.props.singer} />
  </Card>
            
        )
    }
}

export default SingleResult