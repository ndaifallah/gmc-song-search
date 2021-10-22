import React, { Component } from 'react'
import SingleResult from './singleResult';


class Result extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 20
            }}>
                {this.props.data.map(el => <SingleResult song={el.trackName} singer={el.artistName} picture={el.artworkUrl100}/>)}
            </div>
        )
    }
}


export default Result;