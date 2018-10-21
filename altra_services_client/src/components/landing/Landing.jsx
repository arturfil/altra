import React, { Component } from 'react';
import Carousel from '../../components/carousel/Carousel'

import './Landing.css';
import icon from '../../img/2friends_icon.jpg';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
            
                  <Carousel/>
            
        </div>
      </div>
    )
  }
}

export default Landing;
