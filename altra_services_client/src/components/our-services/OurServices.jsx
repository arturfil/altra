import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './OurServices.css';
import seoImage from '../../img/seo-marketing.jpeg';
import webDevelopment from '../../img/web_development.jpg';
import mobileApp from '../../img/mobile_application.jpeg';

class OurServices extends Component {
  render() {
    return <div>
        <div className="container">
          <h2 className="s-title">Our Services</h2>
          <p className="p-title">
            We provide unique solutions that are customized to each of our
            clients' specific needs.
          </p>
        </div>
        <div className="container">
          <div className="row services-block">
            <div className="col-md-6">
              <img className="s-image" src={webDevelopment} alt="" />
            </div>
            <div className="col-md-6">
              <h2>Web Development</h2>
              <p className="services-p">
                Creating a website is one of the intial and most important
                steps on building your brand. Your website is the first
                impression and the image that you give that out to the
                world.
              </p>
              <p className="services-p">
                We create and cater websites and web applications in the
                most timely effective, efficient and affordable way.
              </p>
            </div>
            <img className="img-hidden" src={webDevelopment} alt="" />
            <div className="row services-block">
              <div className="col-md-6">
                <h2>SEO Marketing Services </h2>
                <p className="services-p">
                  Have you ever wondered how people reach to your website?
                  Have you ever heard about SEO?
                </p>
                <p className="services-p">
                  Your website's Search Engine Optimization (or SEO) will
                  help reduce the investment on paid ads, receive organic
                  leads and get new customers.
                </p>
              </div>
              <div className="col-md-6 col-sm-12">
                <img className="s-image" src={seoImage} alt="" />
              </div>
            </div>
            <img className="img-hidden" src={seoImage} alt="" />
            <div className="row services-block">
              <div className="col-md-6 col-sm-12">
                <img className="s-image" src={mobileApp} alt="" />
              </div>
              <div className="col-md-6 col-sm-12">
                <h2>Software & Marketing Solutions</h2>
                <p className="services-p">
                  We offer custom in-house solutions ranging in:
                </p>
                <ul>
                  <li className="services-li">Creative Design</li>
                  <li className="services-li">Google Adwords</li>
                  <li className="services-li">Facebook Ads</li>
                  <li className="services-li">Content Management</li>
                </ul>
                <ul>
                  <li className="services-li">Mobile Applications</li>
                  <li className="services-li">Software Applications</li>
                </ul>
              </div>
            </div>
            <img className="img-hidden" src={mobileApp} alt="" />
          </div>
          <div className="row">
            <div className="col-md-12 link-route">
              <h2 className="">Start working with us!</h2>
              <hr className="basic" />
              <Link to="/contactUs">
                <button className="btn-services" href="/contactUs">
                  Get in Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default OurServices;
