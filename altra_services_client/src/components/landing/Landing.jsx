import React, { Component } from 'react';
import Carousel from '../../components/carousel/Carousel';

import './Landing.css';

import grupoSeri from '../../img/grupo-seri.jpg';
import aaExport from '../../img/aaexport.jpg';
import papas360 from '../../img/papas360.png';
import winCapital from '../../img/win-capital.png';
import whws from '../../img/whws.png';
import twoFriends from '../../img/logo_2_friends.jpg'

class Landing extends Component {
  render() {
    return <div>
        <div className="landing">
          <div className="dark-overlay">
            <h2 className="h2-landing">Digital Solutions</h2>
            <p>Engament, Leads & Conversions</p>
          </div>
        </div>
        <div className="container landing-block">
          <div className="row">
            <div className="col-md-4 card-border">
              <i className="fas fa-cog" />
              <h2 className="p-landing">SEO</h2>
              <p>
                We are a company that is proud for it's Search engine
                optimization and Search Engine Management.
              </p>
            </div>
            <div className="col-md-4 card-border">
              <i className="fas fa-laptop-code" />
              <h2 className="p-landing">Software</h2>
              <p>
                We produce all types of software development ranging from
                web pages, web applications and mobile applications.
              </p>
            </div>
            <div className="col-md-4 card-border">
              <i className="fas fa-mobile" />
              <h2 className="p-landing">Social Presence</h2>
              <p>
                We help our clients to have a impactful social presence in
                order to reach more consumers and returning clients.
              </p>
            </div>
          </div>
        </div>
        <div className="parallax-landing">
          <h2 className="h2-parallax">
            We have the best customer satisfaction
          </h2>
        </div>
        <div className="container logos-block">
          <div className="row">
            <div className="col-md-2">
              <img className="logos" src={grupoSeri} alt="" />
            </div>
            <div className="col-md-2">
              <img className="logos" src={aaExport} alt="" />
            </div>
            <div className="col-md-2">
              <img className="logos" src={papas360} alt="" />
            </div>
            <div className="col-md-2">
              <img className="logos" src={winCapital} alt="" />
            </div>
            <div className="col-md-2">
              <img className="logos" src={whws} alt="" />
            </div>
            <div className="col-md-2">
              <img className="logos" src={twoFriends} alt="" />
            </div>
          </div>
        </div>

        
      </div>;
  }
}

export default Landing;
