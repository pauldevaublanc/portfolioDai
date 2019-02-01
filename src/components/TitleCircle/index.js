import React, { Component } from 'react';
import './index.css';


const SvgTitle = props => (
    
    <svg width="480" height="480" viewBox="0 0 300 300" space="preserve">
        <defs>
            <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"/>
        </defs>
        <circle cx="150" cy="100" r="75" fill="none"/>
        <g>
            <use xlinkHref="#circlePath" fill="none"/>
            <text>
                <textPath xlinkHref="#circlePath">大ゴンドのデザインです*</textPath>
            </text>
        </g>
    </svg>
  )


class TitleCircle extends Component {
  render() {
    return (

    <div className="titleCircle">
       <SvgTitle/>
    </div>
      
    );
  }
}

export default TitleCircle;
