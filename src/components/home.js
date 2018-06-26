import React, { Component } from 'react';
import Header from './header/header';
import FooterComponent from './footer_component/footerComponent';

class Home extends Component {
  render() {
    return (
      <div>
          <Header/>
          <h3>sandeep</h3>
          <FooterComponent/>
      </div>
    );
  }
}

export default Home;
