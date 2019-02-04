import React, { Component } from 'react';
import './index.css';

import PropTypes from 'prop-types';



class Loader extends Component {

  static propTypes = {
    style: PropTypes.object,
}

    render() {
      return (
      <div className="loaderWrapper" style={this.props.style}>
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




