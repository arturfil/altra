import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Landing.css';

import grupoSeri from '../../img/grupo-seri.jpg';
import aaExport from '../../img/aaexport.jpg';
import papas360 from '../../img/papas360.png';
import winCapital from '../../img/win-capital.png';
import whws from '../../img/whws.png';
import twoFriends from '../../img/logo_2_friends.jpg'



class Landing extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

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
                We are a company that is proud for it's Search Engine
                Optimization and Search Engine Management.
              </p>
            </div>
            <div className="col-md-4 card-border">
              <i className="fas fa-laptop-code" />
              <h2 className="p-landing">Software</h2>
              <p>
                We produce all types of software development ranging from
                web pages, web applications and mobile applications.
              </p>
              <Link to="/ourServices">
                <button className="btn-landing" href="/ourServices">
                  learn more
                </button>
              </Link>
            </div>
            <div className="col-md-4 card-border">
              <i className="fas fa-cog" />
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

        <div className="container cards-block">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <div className="container">
                      <h2>SEO</h2>
                    </div>
                  </div>
                  <div className="back">
                    <div className="container">
                      <h2>SEO</h2>
                      <p>
                        We will leverage the google search engine in order
                        to make your website rank at a higher position than
                        it's actual one.
                      </p>
                      <Link to="/ourServices">
                        <button className="btn-learn">Learn More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <div className="container">
                      <h2> Web Development </h2>
                    </div>
                  </div>
                  <div className="back">
                    <div className="container">
                      <h2>Web Development</h2>
                      <p>
                        We use a different variety of technologies in order
                        to deliver the best and most up to date product.
                      </p>
                      <Link to="/ourServices">
                        <button className="btn-learn">Learn More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <div className="container">
                      <h2>Point Per Click</h2>
                    </div>
                  </div>
                  <div className="back">
                    <div className="container">
                      <h2>Point Per Click</h2>
                      <p>
                        It is very important to have different segments of
                        our services for different clients who have
                        different needs, driving more traffic to their
                        websitesd.
                      </p>
                      <Link to="/ourServices">
                        <button className="btn-learn">Learn More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <div className="container">
                      <h2>Facebook Ads</h2>
                    </div>
                  </div>
                  <div className="back">
                    <div className="container">
                      <h2>Facebook Ads</h2>
                      <p>
                        We have the expertise and the know how in order to exploit the 
                        Facebook ads frame work, we will maximize the views per ads.
                      </p>
                      <Link to="/ourServices">
                        <button className="btn-learn">Learn More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <div className="container">
                      <h2>Creative Design</h2>
                    </div>
                  </div>
                  <div className="back">
                    <div className="container">
                      <h2>Creative Design</h2>
                      <p>
                        We have all types of services for creative desing ranging from front-end, 
                        UX/UI to logos and brochures.
                      </p>
                      <Link to="/ourServices">
                        <button className="btn-learn">Learn More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <div className="container">
                      <h2>Software Development</h2>
                    </div>
                  </div>
                  <div className="back">
                    <div className="container">
                      <h2>Point Per Click</h2>
                      <p>
                        We provide all type of Software Development for all type of needs. 
                        We can do web applications, mobile applications and desktop applications
                      </p>
                      <Link to="/ourServices">
                        <button className="btn-learn">Learn More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="" />

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
