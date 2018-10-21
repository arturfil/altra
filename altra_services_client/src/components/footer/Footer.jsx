import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return <div>
        <footer id="footer">
          <div className="container footer-block">
            <div className="row">
              <div className="col-md-6">
                <h2>Two Friends Co.</h2>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <p>email: filioarturo@gamil.com</p>
                </div>
                <div className="row">
                  <p>phone: +1 (305) 586 4304</p>
                </div>
                <div className="row">
                  <p>address: 848 Brickell Key Dr. apt 3304, Miami Fl, 33131</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>;
  }
}

export default Footer;
