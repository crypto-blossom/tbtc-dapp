import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import TBTCLogo from './svgs/TBTCLogo'

class App extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="main">
        <div className="app">
          <header className="nav">
            <div className="logo">
              <TBTCLogo width="150" />
            </div>
            <div className="hamburger">&#x2e2c;</div>
          </header>
          { children }
        </div>
        <footer>
          <div className="footer-content">
            <div className="white-paper">
              <div className="white-paper-label">
                How does it work?
              </div>
              <hr />
              <div className="white-paper-link">
                <a href="keep.network" target="_blank">
                  Read the White Paper >>>>
                </a>
              </div>
            </div>
            <div className="footer-logo">
              <TBTCLogo width="150" />
            </div>
            <div className="footer-links">
              <a href="keep.network" target="_blank">
                about
              </a>
              <a href="keep.network" target="_blank">
                press
              </a>
              <a href="keep.network" target="_blank">
                related
              </a>
              <a href="keep.network" target="_blank">
                contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
