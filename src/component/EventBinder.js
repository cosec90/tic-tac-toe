import React, { Component } from 'react'

export class EventBinder extends Component {
    constructor(){
        super();
        this.state ={
            message: 'Hello'
        }
        // this.changeMessage = this.changeMessage.bind(this);
    }
    // changeMessage(){
    //     this.setState({
    //         message: 'Goodbye'
    //     }) 
    // }
    changeMessage = () =>{
        this.setState({
            message: 'Goodbye'
        })
    }

    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
                {/* <button onClick={ () => this.changeMessage()  }>Click</button> */}
                <button onClick={this.changeMessage}>Click</button>
            </div>
        )
    }
}

export default EventBinder
