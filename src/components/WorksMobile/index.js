import React, { Component } from 'react';
import './index.css';
import config from '../../config/index';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';



class WorksMobile extends Component {

    state = {
        workIndex: 0,
    }


    render() {
      return (        
        <div className="worksWrapperMobile">    
            {
                config.worksMobile.map((work, key) => {
                    return(
                        <Fade bottom key={key}>
                            <div  key={key}>
                                <Link to={`/workDetail/${work.id}`}>
                                    <div className="work">
                                        <div className="visuelWorkMobileWrapper">
                                            <img 
                                                className="visuelWorkMobile"
                                                src={require(`../../img/${work.img}`)} 
                                                alt=""/>
                                        </div>
                                        
                                        <div className="brandWork">{work.title}</div>
                                    </div>
                                </Link>                                           
                            </div>
                        </Fade>
                    )
                })
            }
        </div>
      )
    }
}

export default WorksMobile;
