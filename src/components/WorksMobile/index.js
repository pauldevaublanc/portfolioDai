import React, { Component } from 'react';
import './index.css';
import config from '../../config/index';
import { Link } from 'react-router-dom';



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
                        
                        <div  key={key}>
                            <Link to={`/workDetail/${work.id}`}>
                                <div className="work">
                                    <div className="visuelWorkMobileWrapper">
                                        <img 
                                            className="visuelWorkMobile"
                                            src={require(`../../img/${work.img}`)} 
                                            alt=""/>
                                    </div>
                                    <div className="brandWorkWrapper">
                                        <div>{work.title}</div>
                                        <div>+ info</div>
                                    </div>
                                </div>
                            </Link>                                           
                        </div>
                        
                    )
                })
            }
        </div>
      )
    }
}

export default WorksMobile;
