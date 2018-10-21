import React, { Component } from 'react'

import './Carousel.css'
import seoImage from '../../img/projects.jpeg';
import webDevelopment from '../../img/seo_google.jpeg';
import mobileApp from '../../img/web_design.jpeg';

export default class Carousel extends Component {
  render() {
    return <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div class="carousel-caption carousel-block d-none d-md-block">
                <h2 className="carousel-h2">Web Development</h2>
                <p className="p-dark">We re-design your point of entry</p>
              </div>
              <img className="d-block w-100" src={seoImage} alt="First slide" />
            </div>
            <div className="carousel-item">
              <div class="carousel-caption carousel-block d-none d-md-block">
                <h2 className="carousel-h2">Seo Strategy</h2>
                <p className="p-light">
                  We have the know how to imporove consumer's traffic
                </p>
              </div>
              <img className="d-block w-100" src={webDevelopment} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <div class="carousel-caption carousel-block d-none d-md-block">
                <h2 className="carousel-h2">Marketing</h2>
                <p className="p-light">
                  We provide a wide variety of marketing services
                </p>
              </div>
              <img className="d-block w-100" src={mobileApp} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon icon-overlay" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon icon-overlay" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>;
  }
}
