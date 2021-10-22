import React, { Component } from 'react'
import SingleResult from './singleResult';


class Result extends Component {
    
    render() {
        console.log(this.props.data);
        return (
            //pour afficher html
            // 1 <div>
           /// 2  {this.props.data.map(el=><h3>{el.trackName}</h3>)}
       //  3 </div>

            //on l'affiche dans une card voir ant designe
            <div style={{
                display: "flex",
                flexDirection:"row",
                flexWrap:"wrap",
                padding: 20
            }}>
                {this.props.data.map(el=> <SingleResult song={el.trackName} singer ={el.artistName} picture={el.artworkUrl100} />)}
            </div>
        )
    }
}


export default Result;