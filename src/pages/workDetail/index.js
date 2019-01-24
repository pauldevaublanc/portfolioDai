import React, { Component } from 'react';
import './index.css';
import config from '../../config/index';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Navbar from '../../components/Navbar/index';
import RotateName from '../../components/RotateName/index';
import Footer from '../../components/Footer/index';


class WorkDetail extends Component {
    
    state = {
        windowWidth: window.innerWidth,
    } 

    render() {
        document.documentElement.scrollTop = 0;
        const isMobile = this.state.windowWidth <= 680;
    
        const id = this.props.match.params.index - 1
        const logo = config.works[id].detail.logo
        const visuels = config.works[id].detail.visuel
        return (        
            <div className="workDetailWrapper">
                <Navbar/>
                <div className="workDetailContainer">
                    <RotateName/>
                    <div className="workContent">
                        <div className="workDescriptionDetail">
                            
                            <div className="description">
                                <img src={require(`../../img/${logo}`)} alt="" />
                                <Fade bottom>
                                    <p>{config.works[id].detail.description}</p>
                                </Fade>
                            </div>
                            
                            <Fade bottom cascade>
                            <div className="detail">
                                <div>
                                    <h6>Role</h6>
                                    <p>{config.works[id].detail.role}</p>
                                </div>

                                <div>
                                    <h6>Type of project</h6>
                                    <p>{config.works[id].detail.projectType}</p>
                                </div>

                                <div>
                                    <h6>Agency</h6>
                                    <p>{config.works[id].detail.agency}</p>
                                </div>

                                <div>
                                    <h6>Year</h6>
                                    <p>{config.works[id].detail.year}</p>
                                </div>
                            </div>
                            </Fade>   
                        </div> 
                        
                        <div className="visuelWork">  
                            {
                                visuels.map((img, key) => {
                                    return(
                                        <div key={key}>
                                            <Fade bottom>
                                                <img src={require(`../../img/${img}`)} alt="" />
                                            </Fade>
                                        </div>
                                    )
                                })
                            }
                            <Link to={isMobile ? "/" : "/work"}>
                                <Fade bottom>
                                    <div className="link box-link">
                                        <p className="custom-underline">back to all projects</p>
                                    </div>
                                </Fade>
                            </Link>  
                        </div>
                    </div> 
                </div>  
                <Footer/> 
            </div>
        )
    }
}

export default WorkDetail;
