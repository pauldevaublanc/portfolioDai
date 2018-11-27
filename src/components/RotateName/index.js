import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class RotateName extends Component {

    render(){
        return(
            <Link style={{width: '10%', maxWidth: '160px'}} className="noMobile" to="/"><div className="nameRotate">Dai Gondo</div></Link>
        )
    }
}

export default RotateName 