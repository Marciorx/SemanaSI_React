import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Hello extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Hello;
