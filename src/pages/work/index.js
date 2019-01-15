import React, { Component } from 'react';
import './index.css';
import config from '../../config/index';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Navbar from '../../components/Navbar/index';
import RotateName from '../../components/RotateName/index';
import Footer from '../../components/Footer/index';


class Work extends Component {

    state = {
        activeImg: null,
        x: "-25%",
        y: "-25%",
        transition: "0s",
        workIndex: 0,
        windowWidth: window.innerWidth,
        imagesLoaded: []
    }

    handleImageLoaded = (key) => {
        console.log(key + ' est charge on peut lafficher')
        // on met a jour le tableau
        this.state.imagesLoaded.push(key)
        
        // on met le nouveau tableau dans le state
        this.setState({
            imagesLoaded: this.state.imagesLoaded
        })
        
    }

    handleMouseHover = (key) => {
        this.setState({
            activeImg: key,  
            workIndex: config.works[key].id
        })
    }

    handleMouseLeave = () => {
        this.setState({
            activeImg: null,
            transition: "0s"
        })
    }

    transition = () => {
        this.setState({
            transition: "0.2s"
        })
    }

    
    handleMouseMove = (e) => {

        let cursorStrength = 500;
        let adjustWidth = 0;
        if (window.innerWidth <= 680 ){
            cursorStrength = 1100
            adjustWidth = 100
        } else if (window.innerWidth <= 1360 ){
            cursorStrength = 1000
            adjustWidth = 100
        } else {
            cursorStrength = 500
            adjustWidth = 0
        }

        let width = cursorStrength/ window.innerWidth;
        let height = cursorStrength/ window.innerHeight;
        let pageX = e.pageX - (window.innerWidth) / 2;
        let pageY = e.pageY - (window.innerHeight) /2;
        this.setState({ 
            x: -(Math.round(width * pageX))-(cursorStrength/2)+adjustWidth,
            y: -(Math.round(height * pageY))-(cursorStrength/2)+adjustWidth
            
        });
    }

    getWidth = (width) => {
        if (this.state.windowWidth <= 680) {
            width = width * 0.8
        }
        else if (this.state.windowWidth > 2400) {
            width = width * 1.8
        }
        return width
    }

    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth,
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        console.log('this.state.imagesLoaded', this.state.imagesLoaded)
      return (        
        <div className="workWrapper">
            <div className="navbarFirst">
                <Navbar/>
            </div>
            <div className="workContainer">
                <div className="rotateNameFirst" >
                    <RotateName/>
                </div>
                {
                    config.works.map((work, key) => {
                        return(
                            <div key={key} 
                                onMouseOver={()=>this.handleMouseHover(key)} 
                                onMouseLeave={this.handleMouseLeave}>
                                <div key={key} 
                                    className="workName" 
                                    style={{
                                        color:work.color, 
                                        opacity: key === this.state.activeImg ? 1 : 0
                                    }}>
                                    <h2>{work.title}</h2>
                                    <p>{work.subTitle}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="mask" onMouseMove={this.handleMouseMove.bind(this)}>
                    <div className="slider" 
                        onMouseEnter={()=>this.transition()}
                        style={{
                            transition:this.state.transition,
                            top:this.state.y, 
                            left:this.state.x
                        }}>
                        <Fade big>
                        <div className="workVisuelContainer">
                        {
                            config.works.map((work, key) => {
                                return(
                                    <div key={key}    
                                        onMouseOver={()=>this.handleMouseHover(key)} 
                                        onMouseLeave={this.handleMouseLeave}>
                                        <Link to={`/workDetail/${key + 1}`}>
                                            <img 
                                                className={`workVisuel ${this.state.imagesLoaded.indexOf(key) !== -1 ? 'loaded' : 'noLoaded'}`}
                                                onLoad={ () => this.handleImageLoaded(key) } 
                                                src={require(`../../img/${work.img}`)} 
                                            alt="" 
                                            style={{
                                                width: this.getWidth(work.width, this.state.windowWidth), 
                                                top:work.position.top, 
                                                left:work.position.left,
                                                opacity: this.state.workIndex === work.id || key === this.state.activeImg || this.state.activeImg === null ? 1 : 0.1,
                                            }}/>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        </div>
                        </Fade>
                    </div>
                </div>
                <div className="footerFirst">
                    <Footer/>
                </div>
            </div>
        </div>
      )
    }
}

export default Work;
