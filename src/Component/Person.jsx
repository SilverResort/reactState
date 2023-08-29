import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {person:
            {
            fullname:'Fares',
            bio:'Hello the best guy',
            imgSrc: 'https://gomycodelearndev.blob.core.windows.net/profiles/dd893e0b-f6f3-4d88-8056-f1142ee2a9a8-133329554444620429.jpg',
            profession: 'Web Dev'
        },
        interval:0
    };
    }

    componentDidMount=()=>{
        console.log('Mounted');
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({
            interval: prevState.interval + 1,
            }));
        }, 1000);
    }

    componentDidUpdate=()=>{
        console.log('Update')
    }

    componentWillUnmount=()=>{
        console.log('Unmount')
        clearInterval(this.intervalId)
    }

render() {
    return (
        <div>
            <h1>{this.state.person.fullname}</h1>
            <img src={this.state.person.imgSrc} width='300px' alt='Fares'></img>
            <p>{this.state.person.bio}</p>
            <p>Profession : {this.state.person.profession}</p>
            <p>Timeout : {this.state.interval}</p>
        </div>
        )
    }
}