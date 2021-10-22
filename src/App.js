import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Search from './components/search'; // lzm pour njibo le fichier search to App general

class App extends Component {
constructor(props){
  super(props);
  this.state={
    data: [],
  }
  }

  dataCallback =(d)=> {
    this.setState({
      data:d
    })
  }




  render(){
    console.log(this.state);
    return (
      <div className="App"style={{
        display:'flex',justifycontent:'center',alignitems:'center'}} >
                                   
        <Search dataCallback={this.dataCallback}       />
      </div>
    );
  }
}

export default App
