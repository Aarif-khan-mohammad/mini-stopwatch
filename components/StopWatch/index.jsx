import {Component} from 'react';
import './index.css';

class StopWatch extends Component{
  state = {minutes : 0 , seconds : 0 }

  setTimer = () =>{
    const {minutes , seconds} = this.state;
    this.setState({
      seconds : this.state.seconds + 1
    })
    if (seconds===59){
      this.setState({
        minutes : this.state.minutes + 1 , seconds : 0
      })
    }
  }

  onClickTimer = () =>{
    this.timer = setInterval(this.setTimer , 1000);
  }

  onClickTimerStop = () =>{
    clearInterval(this.timer);
  }

  onClickTimerReset = () =>{
    this.setState({
      minutes : 0 , seconds : 0
    })
  }

  onDisplayTimer = ()=>{
    const {minutes , seconds} = this.state;
    if(minutes<10 && seconds <10){
      return `0${minutes}:0${seconds}`
    }else if (seconds<10){
      return `${minutes}:0${seconds}`
    }else if (minutes<10){
      return `0${minutes}:${seconds}`
    }else{
      return `${minutes}:${seconds}`
    }
  }
  

  render(){
    const {minutes , seconds} = this.state
    return(
      <div className="stopwatch">
          <h2 className='heading'>Stopwatch</h2>
          <div className='app-container'>
            <div className='top'>
              <img src='https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png ' className='clock'/>
              <h4>Timer</h4>
            </div>
            <h1 className='time'>{this.onDisplayTimer()}</h1>
            <div className='buttons'>
              <button className='start' onClick = {this.onClickTimer}>start</button>
              <button className='stop'onClick = {this.onClickTimerStop} >stop</button>
              <button className='reset' onClick = {this.onClickTimerReset} >reset</button>
              
            </div>
          </div>
      </div>
    )
  }
}

export default StopWatch;