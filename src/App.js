import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Search from './components/search'
import Result from './components/result'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
  }

  dataCallBack= (d)=>{
    this.setState({data: d})
  }
  render(){
    return (
      <div className="App" style={{
        dispay:"flex",
        justifyContent: "center",
        width:"100vw"
      }} >
        <Search datacallback={this.dataCallBack} />
        <Result data= {this.state.data}/>
      </div>
    );
  }
}

export default App;