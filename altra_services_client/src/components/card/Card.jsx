import React from 'react'

import "./Card.css";

export default function Card() {

  const title = (title) => {
    return <h2>{this.props.title}</h2>
  }

  return (
    <div>
      <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div className="flipper">
          <div className="front">
            <div className="container">
              <h2>{title}</h2>
              <p>
                <i className="large material-icons special">account_circle</i>
              </p>
              <p>
                <i className=" material-icons">face</i>
                5 Users Online</p>
              <p className="bottom">Online</p>
            </div>
          </div>
          <div className="back">
            <div className="container">
              <p>User online correspond to people connected on your network</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
