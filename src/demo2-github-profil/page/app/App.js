import React, { Component } from 'react';
import './App.css'
import NavBar from '../NavBar/NavBar.js'
import Search from '../search/search.js'
class App extends Component {
  render() {
    return (
      <div className="container">
          <NavBar></NavBar>
          <Search></Search>
      </div>
    );
  }
}

export default App;
