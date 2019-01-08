import React, { Component } from 'react';
import './App.css';
import Home from './home.js';
import 'tachyons';
import Textbox from './Textbox';

class App extends Component {
  render() {
    return (
      <div>
<Home></Home>
<Textbox></Textbox>
      </div>
    );
  }
}

export default App;
