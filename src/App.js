import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Search from './components/search';
import Result from './components/result';
import Cart from './components/cart';
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      panier_add:[],
    }
  }

  dataCallback = (d) => {
    this.setState({
      data: d.results
    })
  }

addMusictoApp = (roro) => {
    console.log('adding music to app', this.state.panier_add); // for music to app
    this.setState({
      panier_add: [...this.state.panier_add, roro]
    })

  }

  render(){
    console.log(this.state.panier_add)
    return (
      <Router >
        <Switch>
    <Route path='/checkout'>
     < h1>helllllllllllllllllllllllllllllllllllll</h1>
     </Route>


     <Route path="/">
    <div className="App"  style={{
        display:'flex',
        flexWrap:'wrap',
        width:'80vw',
      }}>
        <Search callbackFetch={this.dataCallback}/>
        <br/>
        <br/>
        <br/>
        
        <Result data={this.state.data}   Resulttoapp={this.addMusictoApp}/>
        <Cart panier={this.state.panier_add}/>
        
      </div>
    </Route>
  </Switch>
    </Router>

    
    );
  }
}

export default App;
