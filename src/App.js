import React, { Component } from 'react';
import 'antd/dist/antd.css';

import Search from './components/search'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  dataCallback = (d) => {
    this.setState({
      data: d
    })
  }

  render(){
    console.log(this.state);
    return (
      <div className="App" style={{
        textAlign: 'center',
      }}>
        <Search callbackFetch={this.dataCallback}/>
      </div>
    );
  }
}

export default App;
