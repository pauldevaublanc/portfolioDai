import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';



class NavbarMobile extends Component {
  render() {
    return (
        <div className="navbarMobileWrapper transitionColor">
            <Fade top>
                <Link to="/work"><p data-hover="Work">Work</p></Link>
            </Fade>
            <Fade bottom>
                <Link to="/about"><p data-hover="Profile">Profile</p></Link>
            </Fade>
        </div>
    );
  }
}

export default NavbarMobile;
