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
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Checkpoint</h1>
          <Button onClick={this.showOrNoShow}>{this.state.show?'Hide':'Show'}</Button>
          {this.state.show?<Person />:null}
        </header>
      </div>
    )
  }
}
