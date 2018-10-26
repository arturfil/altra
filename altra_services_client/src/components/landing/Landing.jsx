import React, { Component } from 'react';
import Carousel from '../../components/carousel/Carousel';

import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <Carousel />
        </div>
      </div>
    );
  }
}

export default Landing;
