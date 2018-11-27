import React, { Component } from 'react';
import './index.css';

import config from '../../config/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Hobbies extends Component {

    state = {
        activeIndex: 0
    }

    handleHover = (key) => {
        this.setState({
            activeIndex: key
        })
    }

    render(){
        return(
            <div className="hobbiesWrapper">
                <h2>I Love</h2>
                <div className="hobbiesListWrapper">
                    <div className="containerList">
                        <div className="transitionColor">
                            {
                                config.hobbies.map((hobbie, key) => {
                                    return(
                                        <div className="interestListWrapper" key={key}>
                                            <div className="interestList">
                                                <p data-hover={hobbie.name} 
                                                    data-sup={hobbie.supName} 
                                                    style={{transition:'0.8s', 
                                                        color: key === this.state.activeIndex ? "var(--pink)" : "var(--black)"
                                                    }}
                                                    onMouseOver={()=>this.handleHover(key)}>
                                                        {hobbie.name}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p>and so much things</p>
                        <p>You <FontAwesomeIcon icon="heart" className="heart"/></p>
                    </div>
                    <div className="containerDetail">
                        {
                            config.hobbies.map((hobbie, key)=> {
                                return(
                                    <div className="interestDetailWrapper" 
                                        key={key} 
                                        style={{transition:'0.4s', 
                                                opacity: key === this.state.activeIndex ? 1 : 0
                                        }}>
                                        <div className="interestPicure">
                                            <img src={require(`../../img/${hobbie.img}`)} alt=""/>  
                                        </div>
                                        <div className="noMobile interestDescription">
                                            <h2>{hobbie.title}</h2>
                                            <p>{hobbie.description}</p>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                    <div className="containerDetailMobile">
                        {
                            config.hobbies.map((hobbie, key)=> {
                                return(
                                    <div className="interestDetailWrapper" 
                                        key={key} 
                                        style={{transition:'0.4s', 
                                                opacity: key === this.state.activeIndex ? 1 : 0
                                        }}>
                                        <div className="interestDescription ">
                                            <p>{hobbie.title}</p>
                                            <p>{hobbie.description}</p>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>      
            </div>
        )
    }
}

export default Hobbies;