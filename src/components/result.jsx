import React, { Component } from 'react'
import SingleResult from './singleResult';
import { Button } from 'antd';


class Result extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 12
        }
    }

    addSong = (song) => {
        console.log('Adding song: ', song)
        this.props.addSong(song);
    }
    
    render() {
        
        return (
            <>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: 20,
                    width: "70%"
                }}>
                    {this.props.data.map((el, idx) => idx < this.state.count ? <SingleResult price={el.trackPrice} song={el.trackName} singer={el.artistName} picture={el.artworkUrl100} addSong={this.addSong}/> : <></>)}
                </div>
                {/* <Button type="link" style={{marginBottom: 50}} onClick={e => this.setState({count: this.state.count + 6})}>
                    Afficher plus de résultat
                </Button> */}

            </>
        )
    }
}


export default Result;