import React, { Component } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home/index';
import Profile from './pages/profile/index';
import Work from './pages/work/index';
import WorkDetail from './pages/workDetail/index';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)


class App extends Component {

  render() {
    return (
      <Router>         
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={Profile} />
            <Route exact path="/work" component={Work} />
            
            <Route exact path="/workDetail/:index" component={WorkDetail} />
            
            
          </div>
      </Router>
    );
  }
}

export default App;
