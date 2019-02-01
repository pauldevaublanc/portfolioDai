import React, { Component } from 'react';
import './index.css';



class Loader extends Component {
    render() {
      return (
  
      <div className="loaderWrapper">
         <div className="loader">
         <img 
            className="visuelWorkMobile"
            src={require(`../../img/loader.gif`)} 
            alt=""/>
        </div>
      </div>
        
      );
    }
  }
  
  export default Loader;




