import { Card } from 'antd';
import React, { Component } from 'react'
import SingleResult from './singleResult';

class Result extends Component {
           constructor(props){
               super(props)
               this.state={
                   count:12
               }


           }



           
    render() {
        console.log(this.props.data);
        return (
           /* <div  style={{         // cette technique juste entre result et app mais on oublie pas les import et balise
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 20
            }} >
                {this.props.data.map(el=><Card
                hoverable
                style={{ width: 150 }}                  
                cover={<img  src={el.artworkUrl100}/>}
              >
                <Card.Meta title={el.trackName} description={el.artistName} />
              </Card>)}
            </div>)*/
        <div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 20
            }}>{/* idx<10 ? et :<> </> la condition*/}
                {this.props.data.map((el,idx) => idx<this.state.count ? <SingleResult song={el.trackName} singer={el.artistName} picture={el.artworkUrl100} audio={el.previewUrl} /> :<> </>)} 
            </div>
          
            <button type="link "style={{marginBottom:50}} onClick={e=> {
              this.setState({count:this.state.count+6})
              
              }}> 
            afficher plus de resultat 
           </button>
        </div>
            )

        
    }
}


export default Result;