import React, { Component } from 'react';
import './index.css';

import config from '../../config/index';



class QuoteGenerator extends Component {
    
  render() {
    const randomNumber = Math.floor(Math.random() * (config.sentences.length));
    const sentence = config.sentences[randomNumber].sentence;
    const author = config.sentences[randomNumber].author;
    return (
        <div className="quoteGeneratorWrapper">
        <p className="sentence">{sentence}</p>
        <p>{author}</p>
        </div>
    );
  }
}

export default QuoteGenerator;