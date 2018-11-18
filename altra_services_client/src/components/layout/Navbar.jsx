import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import icon from '../../img/Olog2.jpg'

// TODO: import logo

class Navbar extends Component {
  render() {
    return <div>
        <nav className="navbar fixed-top navbar-expand-sm navbar-light">
          <div className="container">
            <a href="/" className="navbar-brand btn-landing" style={{ color: 'rgba(0, 0, 0, 0.845)' }}> 
              <div className="row">
                <div className="col-md-6">
                  <img className="img-logo" src={icon} alt="" />
                </div>
                <div className="col-md-6">
                </div>
              </div>
            </a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto red-color">
                <li className="nav-item">
                  <Link className="nav-link hov-anim a-links" to="/" style={{ color: 'rgba(0, 0, 0, 0.845)' }}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link hov-anim a-links" to="/ourServices" style={{ color: 'rgba(0, 0, 0, 0.845)' }}>
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link hov-anim a-links" to="/aboutUs" style={{ color: 'rgba(0, 0, 0, 0.845)' }}>
                    Core Values
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactUs" className="nav-link hov-anim a-links" style={{ color: 'rgba(0, 0, 0, 0.845)' }}>
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item ">
                  {/* <Link
                    to="/Blog"
                    className="nav-link hov-anim a-links"
                    style={{ color: 'rgba(0, 0, 0, 0.845)' }}
                  >
                    Blog
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>;
  }
}

export default Navbar;
