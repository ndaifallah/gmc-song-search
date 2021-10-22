import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Search from './components/search'
import Result from './components/result'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      loading:true
    }
  }

  dataCallBack= (d)=>{
    this.setState({data: d})
  }
   Loading(load) {
    this.setState({loading:load})
  }
  render(){
    return (
      <div className="App" style={{
        dispay:"flex",
        justifyContent: "center",
        width:"100vw"
      }} >
        <Search datacallback={this.dataCallBack} />
        <Result data= {this.state.data} loadstate={this.state.loading}/>
      </div>
    );
  }
}

export default App;