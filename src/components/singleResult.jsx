import { render } from "@testing-library/react"
import React,{Component} from "react"
import { Card } from 'antd';

const { Meta } = Card

class SingleResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }
    render(){
        return(
            <div style={{
                margin:"4px"
            }}>
                <Card
    hoverable
    style={{
       width: 200,
      //  height: 160
     }}
    cover={<img alt="example" src={this.props.img} />}
  > 
    <Meta title={this.props.song} description={this.props.name} />
  </Card>
            </div>
        )
    }
}
export default SingleResult