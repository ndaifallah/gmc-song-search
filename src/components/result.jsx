
import { render } from "@testing-library/react"
import React,{Component} from "react"
import SingleResult from './singleResult'
import { Button } from 'antd';


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:12,
            // datastate:this.props.data
        };
      }
    render(){
        console.log(this.props.data)
        return(<div>
            <div style={{
                display: "flex",
                flexWrap:"wrap",
                marginTop:'10px'
            }}>
                {this.props.data.map((el,idx)=>{
                    return idx<this.state.count?<SingleResult img={el.artworkUrl100} name={el.artistName} song={el.trackName}/> : <></>
                })}
               
            </div>
            {this.props.data.length>0?<Button type="link" style={{marginbottom:50}} onClick={e=>this.setState({count:this.state.count+6})}>Afficher Plus</Button>:<></>}
        </div>
            // <div>
            //     <SingleResult img='test' name='hello' song='adele' />
            // </div>
            
        )
    }
}
export default Result