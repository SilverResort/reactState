import './App.css';
import React from 'react';
import { Component } from 'react'
import {Button} from 'react-bootstrap'
import Person from './Component/Person';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
    this.interval={Date}
  }

  showOrNoShow=()=>{
    this.setState({show:!this.state.show});
    console.log(this.state.show)
    
    let t=0
    if (this.state.show===false){
      console.log('Mounted app.js')
      setInterval(() => {
        t=t+1
        console.log(t)
      }, 1000)
    }
  }

  // setInterval=(() => {
  //   console.log('first')
  // }, 1000)


  render() {
    // let t=console.log(`t=${Date.now()}`)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Checkpoint</h1>
          <Button onClick={this.showOrNoShow}>{this.state.show?'Hide':'Show'}</Button>
          {this.state.show?<Person />:null}
          <p>Timeout : {this.setInterval}</p>
        </header>
      </div>
    )
  }
}
