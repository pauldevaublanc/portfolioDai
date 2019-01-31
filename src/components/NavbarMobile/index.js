import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

import Fade from 'react-reveal/Fade';



class NavbarMobile extends Component {

    static propTypes = {
        onClickNav: PropTypes.func
    }

    state = {
        windowWidth: window.innerWidth
    }

  render() {
    const isMobile = this.state.windowWidth <= 680;
    return (
        <div onClick={ this.props.onClickNav } className="navbarMobileWrapper transitionColor">
            <Fade top>
                <NavLink activeClassName={'activeLink'} to={isMobile ? "/" : "/work"} exact><p data-hover="Work">Work</p></NavLink>
            </Fade>
            <Fade bottom>
                <NavLink activeClassName={'activeLink'} to="/about" exact><p data-hover="Profile">Profile</p></NavLink>
            </Fade>
        </div>
    );
  }
}

export default NavbarMobile;
