import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Hi',
            name: 'Shahid'
        }
        this.sendMessage = this.sendMessage.bind(this);
    }
    // sendMessage(someMessage){
    //     alert(`${this.state.message} ${this.state.name} from ${someMessage}`);
    // }
    sendMessage(){
        alert(`${this.state.message} ${this.state.name}`);
    }
    render() {
        return (
            <div>
                <ChildComponent messageHandler = {this.sendMessage}/>
            </div>
        )
    }
}

export default ParentComponent
