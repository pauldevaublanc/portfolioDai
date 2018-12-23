import React, { Component } from 'react';
import './index.css';


class QuoteGenerator extends Component {
    
  render() {
    return (
        <div className="quoteGeneratorWrapper">
        <p className="sentenceJp">ポ<span>ー</span>トフォリオ</p>
        <p className="sentenceFr">| Morceaux Choisis</p>
        </div>
    );
  }
}

export default QuoteGenerator;