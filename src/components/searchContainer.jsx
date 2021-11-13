import React, { Component } from 'react';
import Cart from './cart';
import Result from './result';
import Search from './search';


class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cart: [],
      actual_step: 0
    }
  }

  dataCallback = (d) => {
    this.setState({
      data: d.results
    })
  }

  addSong = title => {
    this.setState({
      cart: [...this.state.cart, title],
    });
  }
  render() {
    console.log(this.props)
    return (
      <div className="App" style={{
        textAlign: 'center',
        position: 'relative',
      }}>
        <Search callbackFetch={this.dataCallback}/>
        <br/>
        <br/>
        <br/>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'relative',
        }}>
          <Result data={this.state.data} addSong={this.addSong}/>
          <Cart panier={this.state.cart} history={this.props.history}/>
        </div>
      </div>
    )
  }
}

export default SearchContainer;