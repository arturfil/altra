import React, { Component } from 'react';

import './AboutUs.css';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="about-us">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p className="intro-p">
                    In Altra we beliebe in creativity, innovation and efficiency
                  </p>
                </div>
                <div className="container title" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row services-block1 services-block">
            <div className="col-md-6">
              <h2>Creativity</h2>
            </div>
            <div className="col-md-6">
              <p className="aboutUs-p">
                We deliver the latest thing in web development products and
                Marketing strategies. Our products are unique and specific to
                every clients industry and background.
              </p>
            </div>
          </div>
          <div className="row services-block2 services-block">
            <div className="col-md-6">
              <h2>Innovation</h2>
            </div>
            <div className="col-md-6">
              <p className="aboutUs-p">
                Every day we face the task to deliver the best and we have to
                always be ahead of the new technology trends. We have to impose
                trends, we have to innovate.
              </p>
            </div>
          </div>
          <div className="row services-block3 services-block">
            <div className="col-md-6">
              <h2>Efficiency</h2>
            </div>
            <div className="col-md-6">
              <p className="aboutUs-p">
                Our services have to speak for themselves. We really enphasize
                how numbers and targets have to be met. Our mission is to create
                and deliver our services processes in the most efficient manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
