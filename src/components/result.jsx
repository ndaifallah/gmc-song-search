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
    
    render() {
        
        return (
            <div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: 20
                }}>
                    {this.props.data.map((el, idx) => idx < this.state.count ? <SingleResult song={el.trackName} singer={el.artistName} picture={el.artworkUrl100}/> : <></>)}
                </div>
                <Button type="link" style={{marginBottom: 50}} onClick={e => this.setState({count: this.state.count + 6})}>
                    Afficher plus de résultat
                </Button>

            </div>
        )
    }
}


export default Result;