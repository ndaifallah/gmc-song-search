
import { render } from "@testing-library/react"
import React,{Component} from "react"
import SingleResult from './singleResult'


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    render(){
        console.log(this.props.data)
        return(
            <div style={{
                display: "flex",
                flexWrap:"wrap",
                marginTop:'10px'
            }}>
                {this.props.data.map((el)=>{
                    return <SingleResult img={el.artworkUrl100} name={el.artistName} song={el.trackName}/> 
                })}
               
            </div>
            // <div>
            //     <SingleResult img='test' name='hello' song='adele' />
            // </div>
            
        )
    }
}
export default Result