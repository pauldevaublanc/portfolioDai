import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { disableScroll, enableScroll } from '../../helpers/scroll'
import NavbarMobile from '../NavbarMobile/index';




class Navbar extends Component {

    static propTypes = {
        style: PropTypes.object,
    }

    state = {
        menuOpen: false,
        windowWidth: window.innerWidth
    }

    handleClick = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    handleResize = () => {
       if (this.state.menuOpen && window.innerWidth < 680) {
           window.scroll(0, 0);
           disableScroll()
       } else {
           enableScroll()
       }
    }

    componentDidUpdate(prevProps, prevState) {
        this.handleResize()
    }    

    componentDidMount() {
        window.addEventListener("resize", this.handleResize)                            
    }

    componentWillUnmount() {
        enableScroll()
        window.removeEventListener('resize', this.handleResize)
    }
    


    render() {
        const isMobile = this.state.windowWidth <= 680;

        return (
            <div className="navbarWrapper" style={this.props.style}>
                    {this.state.menuOpen? <NavbarMobile/> : null }
                <div className="navbarElements transitionColor">
                    <Link to={isMobile ? "/" : "/work"}><p data-hover="Work">Work</p></Link>
                    <Link to="/about"><p data-hover="Profile">Profile</p></Link>
                </div>

                

                <Link to="/"><div className="name">Dai Gondo</div></Link>

                <div onClick={this.handleClick} data={this.state} className={`burgerMenuWrapper ${this.state.menuOpen ? 'open' : ''}`}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                
            </div>
        );
    }
}

export default Navbar;
