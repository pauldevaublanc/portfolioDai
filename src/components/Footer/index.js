import React, { Component } from 'react';
import './index.css';

class Footer extends Component {

    facebook = () => {
        window.open('https://www.facebook.com/sharer/sharer.php?u=https://daigondo.com',
            'facebook-share-dialog',
            'width=800,height=600'
        );
        return false;
    };

    render(){
        
        return(
            <div className="footerWrapper">
                <div id="fb-share-button" onClick={()=>this.facebook()}>
                    Share
                </div>
                <p>Dai Gondo ® ALL RIGHTS RESERVED</p>
                <p></p>
            </div>
        )
    }
}

export default Footer; 
