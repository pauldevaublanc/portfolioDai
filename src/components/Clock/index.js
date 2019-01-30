import React, { Component } from 'react';
import './index.css';
import moment from 'moment-timezone';

class Clock extends Component {

  state = {
    japHour: moment().tz('Asia/Tokyo').format("h:mm:ss a"),
    japDate: moment().tz('Asia/Tokyo').format("MMMM Do YYYY")
  }
  
  updateTime = () => {
    this.setState({
      japHour: moment().tz('Asia/Tokyo').format("h:mm:ss a"),
      japDate: moment().tz('Asia/Tokyo').format("MMMM Do YYYY")
    })
  }

  interval = null

  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
    <div className="clockWrapper">
       <div className="redCircle"></div>
       <p className="city">Tokyo,</p>
       <p>{this.state.japDate}</p>
       <p>{this.state.japHour}</p>
    </div>
      
    );
  }
}

export default Clock;
