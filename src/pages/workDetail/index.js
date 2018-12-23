import React, { Component } from 'react';
import './index.css';
import config from '../../config/index';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Navbar from '../../components/Navbar/index';
import RotateName from '../../components/RotateName/index';
import Footer from '../../components/Footer/index';


class WorkDetail extends Component {

    render() {
    
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
                            <Fade bottom cascade>
                            <div className="description">
                                <img src={require(`../../img/${logo}`)} alt="" />
                                <p>{config.works[id].detail.description}</p>
                            </div>

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
                                visuels.map((img, key) => 
                                <Fade key={key} bottom>
                                    <img  src={require(`../../img/${img}`)} alt="" />
                                </Fade>
                                )
                            }
                            
                            <Link  to="/work">
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
