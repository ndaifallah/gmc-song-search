import React, { Component } from 'react';
import 'antd/dist/antd.css';

import Search from './components/search';
import Result from './components/result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  dataCallback = (d) => {
    this.setState({
      data: d.results
    })
  }

  render(){
    return (
      <div className="App" style={{
        textAlign: 'center',
      }}>
        <Search callbackFetch={this.dataCallback}/>
        <br/>
        <br/>
        <br/>
        <Result data={this.state.data} />
      </div>
    );
  }
}

export default App;
