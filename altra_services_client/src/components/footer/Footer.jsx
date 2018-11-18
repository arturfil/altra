import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return <div>
        <footer id="footer">
          <div className="container footer-block">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2>OLog2</h2>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-4">
                      <p className="footer-h2-link">Important</p>
                      <div className="row">
                        <p>Blog</p>
                      </div>
                      <div className="row">
                        <p>Articles</p>
                      </div>
                      <div className="row">
                        <p>
                          Olog2 in Mexico
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <p className="footer-h2-link">Links</p>
                      <div className="row">
                        <p>Facebook</p>
                      </div>
                      <div className="row">
                        <p>Twitter</p>
                      </div>
                      <div className="row">
                        <p>Instagram</p>
                      </div>{' '}
                    </div>
                    <div className="col-md-4">
                      <p className="footer-h2-link">Contact Info</p>
                      <div className="row">
                        <p>email: info@2friendsco.com</p>
                      </div>
                      <div className="row">
                        <p>phones: +1 (786) 853 7720 - (305) 586 4304</p>
                      </div>
                      <div className="row">
                        <p>
                          address: 848 Brickell Key Dr. apt 3304, Miami Fl,
                          33131
                        </p>
                      </div>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>;
  }
}

export default Footer;
