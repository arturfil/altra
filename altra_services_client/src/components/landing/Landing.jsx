import React, { Component } from 'react';
import Carousel from '../../components/carousel/Carousel';

import './Landing.css';

class Landing extends Component {
  render() {
    return <div>
        <div className="landing">
          <div className="dark-overlay">
            <h2 className="h2-landing">OLog2</h2>
            <p className>Your digital solution's Company of choice</p>
          </div>
        </div>
        <div className="container landing-block">
          <div className="row">
            <div className="col-md-4 card-border">
              <i className="fas fa-cog"></i>
              <h2 className="p-landing">SEO</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere atque, eligendi ullam doloribus illo minus molestias possimus voluptas? Magnam, debitis nobis vel atque magni placeat quas saepe facere distinctio.</p>
            </div>
            <div className="col-md-4 card-border">
              <i className="fas fa-laptop"></i>
              <h2 className="p-landing">Web Development</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere atque, eligendi ullam doloribus illo minus molestias possimus voluptas? Magnam, debitis nobis vel atque magni placeat quas saepe facere distinctio.
              </p>
            </div>
            <div className="col-md-4 card-border">
              <i className="fas fa-mobile"></i>
              <h2 className="p-landing">Social Presence</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere atque, eligendi ullam doloribus illo minus molestias possimus voluptas? Magnam, debitis nobis vel atque magni placeat quas saepe facere distinctio.</p>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Landing;
