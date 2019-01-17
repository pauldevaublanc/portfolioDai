import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import TitleCircle from '../../components/TitleCircle/index';
import Clock from '../../components/Clock/index';
import QuoteGenerator from '../../components/QuoteGenerator/index';


class Home extends Component {

  facebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://daigondo.com',
        'facebook-share-dialog',
        'width=800,height=600'
    );
    return false;
  };

    render() {
      return (
        <div className="homeWrapper">
          <Fade>
            <div className="infosWrapper">
              <p className="noMobile" style={{textAlign:'left'}}>Bonjour</p>
              <p className="titleMobile"><span className="noMobile">My name is </span>Dai Gondo</p>
              <p className="noMobile" style={{textAlign:'right'}}>Illustrator</p>
            </div>

            <div className="mainContent">
              <Clock/>
              <Link to="/work"><TitleCircle/></Link>
              <QuoteGenerator/>
            </div>

            <div className="infosWrapper">
              <div id="fb-share-button" className="noMobile" onClick={()=>this.facebook()}>
                    Share
              </div>
              <p>* This is Dai Gondo design</p>
              <p className="noMobile" style={{textAlign:'right'}}>Oh yeah !</p>
            </div>
          </Fade>
        </div>
      )
    }
}

export default Home;
