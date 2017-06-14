import React, { Component } from 'react';
import {Link} from 'react-router';

class Menu extends Component {
  render() {
    return (
      <div className="App">
          <Link to={'/'}  activeClassName={'home'}>
              app
          </Link>
          <br/>
          <Link to={'/home1'}  activeClassName={'home'}>
              home1
          </Link>
          <br/>
          <Link to={'/home2'}  activeClassName={'home'}>
              home2
          </Link>
      </div>
    );
  }
}

export default Menu;
