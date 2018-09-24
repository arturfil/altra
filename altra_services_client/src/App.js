import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Components
import Navbar from './components/layout/Navbar';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import ContactUs from './components/contact-us/ContactUs';
import OurServices from './components/our-services/OurServices';
import AboutUs from './components/about-us/AboutUs';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path="/ourServices" component={OurServices} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
