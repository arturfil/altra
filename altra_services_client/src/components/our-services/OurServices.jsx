import React, { Component } from 'react';

import './OurServices.css';
import seoImage from '../../img/seo-marketing.jpeg';
import webDevelopment from '../../img/web_development.jpg';
import mobileApp from '../../img/mobile_application.jpeg';

class OurServices extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="s-title">Our Services</h2>
          <p className="p-title">
            All Our Services Are custom made to specific client's needs!
          </p>
        </div>
        <div className="container">
          <div className="row services-block  ">
            <div className="col-md-6">
              <img className="s-image" src={webDevelopment} alt="" />
            </div>
            <div className="col-md-6">
              <h2>Web Development</h2>
              <p className="services-p">
                We create and cater websites and web applications custom made to
                client's specific needs.
              </p>
              <p className="services-p">
                Having a great variety of products, we offer competitive
                pricepoints and an excellent customer service.
              </p>
            </div>
            <div className="row services-block">
              <div className="col-md-6">
                <h2>Search Engine Optimization Marketing Services </h2>
                <p className="services-p">
                  We develiver the latest in SEO technology and services, PPC
                  and content marketing.
                </p>
                <p className="services-p">
                  Together we will make your website receive more consumer
                  traffic allowing the website to grow organically and rank
                  higher in the Google Search Engine.
                </p>
              </div>
              <div className="col-md-6 col-sm-12">
                <img className="s-image" src={seoImage} alt="" />
              </div>
            </div>
            <div className="row services-block">
              <div className="col-md-6 col-sm-12">
                <img className="s-image" src={mobileApp} alt="" />
              </div>
              <div className="col-md-6 col-sm-12">
                <h2>Mobile Applications and Custome Software Coming Soon</h2>
                <p className="services-p">
                  Pretty soon we will be taking requests for mobile and custom
                  software applications. Currently we can develop Android
                  applications and in the near future iOS and more.
                </p>
                <p className="services-p">
                  If there are any doubts please don't hesitate to contact Us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurServices;
