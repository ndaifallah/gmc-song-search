import React, { Component } from 'react';
import Search from './search';
import Result from './result';
import Cart from './cart';

class SearchContainer extends Component {
        constructor(props) {
          super(props);
          this.state = {
            data: [],
            songs_added: []
          }
        }
      
        addToCart = (title) => {
          console.log('Adding to cart from App.js', this.state.songs_added);
          // Maintenant on met les livres ajoutés une fois le bouton add book, dans books_added dans le state du App
          // Si on a à faire avec les tablaux, on utilise le spread pour r&écuperer les elements de l'ancien state, et on fait l'ajout du nouveau
          this.setState({
            songs_added: [...this.state.songs_added, title]
          })
        }
      
        dataCallback = (d) => {
          this.setState({
            data: d.results
          })
        }
        render(){ 
            console.log(this.props);
            return (

           
        <div className="App" style={{
            textAlign: 'center',
          }}>
    
            <Search callbackFetch={this.dataCallback}/>
            <br/>
            <br/>
            <br/>
            <Result data={this.state.data} songpanier={this.addToCart}/>
    
            <Cart panier={this.state.songs_added} history={this.props.history} />
    
          </div>
            )}
          }
          export default SearchContainer;