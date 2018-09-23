import React, { Component } from 'react';

import './OurServices.css';

class OurServices extends Component {
  render() {
    return (
      <div>
        <div className="our-services mt-5">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p className="mt-5 mb-4 h2-ourservices p-ourservices">
                    We buy all types of machinery and machinery parts
                  </p>
                </div>
                <div className="container title" />
              </div>
            </div>
          </div>
        </div>
        <div className="container info-block">
          <h2 className="text-center title">Our services</h2>
          <hr className="basic" />
          <p className="text-center intro">
            We specialize in purchase and shipment of equipment. We focus our
            range of products vary from various important industries.
          </p>

          <div className="row title-paragraphs">
            <div className="col-md-4 col-sm-12">
              <i className="fas fa-envelope os-icon fa-4x" />
              <h5>Cargo Freight & Door To Door Services</h5>
              <hr className="basic" />
            </div>
            <div className="col-md-4 col-sm-12">
              <i className="fas fa-globe-americas fa-4x os-icon" />
              <h5>Worldwide Logistics & Distribution</h5>
              <hr className="basic" />
            </div>
            <div className="col-md-4 col-sm-12">
              <i className="fas fa-hand-holding-usd fa-4x os-icon" />
              <h5>Purchase & Aquisition Of Equipment</h5>
              <hr className="basic" />
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4 col-sm-12 col-12">
              {/* <img className="img-size m2" src={machine1} alt="" /> */}
              <h4>Heavy & Light Machines</h4>
            </div>
            <div className="col-md-4 col-sm-12 col-12">
              {/* <img className="img-size m2" src={machine2} alt="" /> */}
              <h4>Engines for Machinery</h4>
            </div>
            <div className="col-md-4 col-sm-12 col-12">
              {/* <img className="img-size m2" src={machine3} alt="" /> */}
              <h4>Construction Cranes Machines</h4>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 col-sm-12 col-12">
              {/* <img className="img-size m2" src={machine4} alt="" /> */}
              <h4>Hydraulic Hammers</h4>
            </div>
            <div className="col-md-4 col-sm-12 col-12">
              {/* <img className="img-size m2" src={machine5} alt="" /> */}
              <h4>Forklifts</h4>
            </div>
            <div className="col-md-4 col-sm-12 col-12">
              {/* <img className="img-size m2" src={machine6} alt="" /> */}
              <h4>Valves, Bombs & Compressors</h4>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 col-sm-12 col-12">
              {/* <img className="img-size m2" src={machine7} alt="" /> */}
              <h4>Portable Power Generator</h4>
            </div>
            <div className="col-md-4 col-sm-12 col-12">
              {/* <img className="img-size m2" src={machine8} alt="" /> */}
              <h4>Boat Accesories & Repair Parts</h4>
            </div>
            <div className="col-md-4 col-sm-12 col-12">
              {/* <img className="img-size m2" src={machine9} alt="" /> */}
              <h4>Airplane Parts</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurServices;
