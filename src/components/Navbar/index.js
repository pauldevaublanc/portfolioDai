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
        windowWidth: window.innerWidth,
        isTop: true,
        isMobile: false
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

    handleScroll = () => {
        const isTop = window.scrollY < 50;
        if (isTop !== this.state.isTop){
            this.setState({isTop})
        }
    }


    componentDidUpdate(prevProps, prevState) {
        this.handleResize()
    }    


    multiEvent = (element, eventNames, listener) => {
        var events = eventNames.split(' ');
        for (var i=0, iLen=events.length; i<iLen; i++) {
            element.addEventListener(events[i], listener, false);
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        document.addEventListener('scroll', this.handleScroll); 

        this.multiEvent(window, 'load resize click', () => {
            const isMobile = window.innerWidth < 680;
            if (isMobile !== this.state.isMobile){
                this.setState({isMobile})
            }
        })  
        
         
    }

    componentWillUnmount() {
        enableScroll()
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('scroll', this.handleScroll);
    }
    


    render() {
        const isMobile = this.state.windowWidth <= 680;
        return (
            <div style={{width:'100vw'}}>
                <div 
                    onClick={this.handleScroll} 
                    className={`navbarWrapper ${this.state.isTop  || !this.state.isMobile ? '': 'bgGrey'}`} 
                    style={this.props.style}>
                        {this.state.menuOpen? <NavbarMobile/> : null }
                    <div className="navbarElements transitionColor">
                        <Link to={isMobile ? "/" : "/work"}><p data-hover="Work">Work</p></Link>
                        <Link to="/about"><p data-hover="Profile">Profile</p></Link>
                    </div>

                    

                    <Link to="/"><div className="name">Dai Gondo</div></Link>

                    <div 
                        onClick={this.handleClick} 
                        data={this.state} 
                        className={`burgerMenuWrapper ${this.state.menuOpen ? 'open' : ''}`}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Navbar;
