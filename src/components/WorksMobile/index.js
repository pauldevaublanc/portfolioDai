import React, { Component } from 'react';
import './index.css';
import config from '../../config/index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



class WorksMobile extends Component {

    static propTypes = {
        onImagesLoaded : PropTypes.func 
    }

    state = {
        workIndex: 0,
        imagesLoaded: 0,
        totalImages: config.worksMobile.length
    }

    handleLoad = () => {
        this.setState({
            imagesLoaded: this.state.imagesLoaded + 1
        }) 
        if (this.state.totalImages === this.state.imagesLoaded){
            this.props.onImagesLoaded()
            console.log("hello")
        }
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
                                            alt=""
                                            onLoad={()=>this.handleLoad()}/>
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
