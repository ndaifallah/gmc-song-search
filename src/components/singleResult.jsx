import React, { Component } from 'react'
import {RadarChartOutlined } from  "@ant-design/icons";
import { Card } from 'antd'
const { Meta } = Card;
class SingleResult extends Component {
    render() {
        console.log(this.props)
        return (
            <Card style={{ width: 200,
                margin: 10,
                
            }} cover={ <img alt="example" src={this.props.picture} />
            }
            actions={[
            <RadarChartOutlined onClick={e=>{this.props.addsong(this.props.son)}}/>
                ]}
                >
                <Card.Meta title={this.props.song} description={this.props.singer} />

                </Card>)
            // <Card
            //     hoverable
            //     style={{ 
            //         width: 200,
            //         height: 300,
            //         margin: 10
            //     }}
            //     cover={<img src={this.props.picture} />}
            // >
            //      {[
            //         <RadarChartOutlined onclick={e=>{this.props.addsong(this.props.son.title)}}/>
                        
            //     ]}
            //     <Card.Meta title={this.props.son.song} description={this.props.son.singer}/>
            // </Card>
        
    }
}

export default SingleResult