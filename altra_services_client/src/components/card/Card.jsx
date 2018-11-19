import React from 'react'
import { Link } from 'react-router-dom';

import "./Card.css";

export default function Card() {

  const title = (title) => {
    return <h2>{this.props.title}</h2>
  }

  return <div>
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
                    We use a different variety of technologies in order to
                    deliver the best and most up to date product.
                  </p>
                  <Link to="/ourServices">
                    <button className="btn-learn">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </div>;
}
