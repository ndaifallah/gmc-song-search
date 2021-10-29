import { Button } from 'antd';
import React, { Component } from 'react'
import SingleResult from './singleResult';


class Result extends Component {
    constructor (props){
        super (props);
        this.state={
            count: 12
        }
    }
    addsongs= (title) => {
console.log(title)
this.props.songpanier(title)
    }
    render() {
        console.log(this.props.data);
        return (
            //pour afficher html
            // 1 <div>
           /// 2  {this.props.data.map(el=><h3>{el.trackName}</h3>)}
       //  3 </div>

            //on l'affiche dans une card voir ant designe
            <div> 
            <div style={{
                display: "flex",
                flexDirection:"row",
                flexWrap:"wrap",
                padding: 20,
                width: "70%",
                backgroundColor: "greenyellow"
              
            }}>
                {this.props.data.map((el, idx)=> idx<this.state.count? <SingleResult song={el.trackName} singer ={el.artistName} picture={el.artworkUrl100} price={el.trackPrice} addSong={this.addsongs}  />: <></>)}

                
</div> 
<Button type="linK" style={{marginBottom: 50}} onClick={e=>this.setState({count: this.state.count+6})}> 
afficher plus de résultat
</Button>
            </div>
        )
    }
}


export default Result;