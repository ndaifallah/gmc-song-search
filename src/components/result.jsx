import React, { Component } from 'react'
import { Card } from 'antd';

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
                {this.props.data.map(el=><Card

    hoverable
    style={{ width: 200,
        height: 300,
    margin: 10,
    }}
    cover={<img src={el.artworkUrl100} />}
  >
    <Card.Meta title={el.trackName} description={el.artistName} />
  </Card>)}
            </div>
        )
    }
}


export default Result;