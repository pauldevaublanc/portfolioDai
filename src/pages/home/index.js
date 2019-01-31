import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import TitleCircle from '../../components/TitleCircle/index';
import Clock from '../../components/Clock/index';
import QuoteGenerator from '../../components/QuoteGenerator/index';
import WorksMobile from '../../components/WorksMobile';
import Navbar from '../../components/Navbar';
// import Loader from '../../components/Loader';

import TitleCircleMobile from '../../components/TitleCircleMobile';


class Home extends Component {

  state = {
    windowWidth: window.innerWidth,
    isLoading: true,
    imagesLoaded: false
} 

scrollOnClick() {
  window.scrollTo({
    top: window.innerHeight - 60,
    behavior: 'smooth'
  });
}

componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}

componentDidMount() {
  this.setState({isLoading: false});
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ windowWidth: window.innerWidth });
};

getMobileView = () => {
  const isMobile = this.state.windowWidth <= 680;
  let content = null;
  if (isMobile) {
    content= <WorksMobile  onImagesLoaded={()=> {this.setState({imagesLoaded:true})}}/>
  }

  return content
}

  facebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://daigondo.com',
        'facebook-share-dialog',
        'width=800,height=600'
    );
    return false;
  };

    render() {
      const isMobile = this.state.windowWidth <= 680;
      return (
        <div className="homeWrapper">
            {
              isMobile ? <Navbar style={{marginTop:'0px', marginLeft:'0px', width:'100vw'}}/> :
              <Fade><div className="infosWrapper">
                <p className="noMobile" style={{textAlign:'left'}}>Bonjour</p>
                <p className="titleMobile"><span className="noMobile">My name is </span>Dai Gondo</p>
                <p className="noMobile" style={{textAlign:'right'}}>Illustrator</p>
              </div></Fade>
            }
            <Fade>

            <div className="mainContent">
              <Clock/>
              {
                isMobile ? 
                  <div 
                    onClick={this.scrollOnClick.bind(this)}>
                      <TitleCircleMobile/>
                  </div> : <Link to={"/work"} ><TitleCircle/></Link>
              }
              
              <QuoteGenerator/>
            </div>

            <div className="infosWrapper">
              <div id="fb-share-button" className="noMobile" onClick={()=>this.facebook()}>
                    Share
              </div>
              {
                isMobile ? 
                  <img 
                    src={require('../../img/down-arrow.png')} 
                    style={{margin:"0px auto 70px", width:20}} 
                    alt="down-arrow"
                  /> : <p>* This is Dai Gondo design</p>
              }
              <p className="noMobile" style={{textAlign:'right'}}>Oh yeah !</p>
            </div>
          </Fade>
          {  this.getMobileView()  }
        </div>
        
      )
    }
}

export default Home;
