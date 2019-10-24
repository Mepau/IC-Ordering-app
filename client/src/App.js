import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShopList from './components/ShopList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <ShopList/>
      </div>
    );
  }
}
export default App;
