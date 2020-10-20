import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        let message;
        if(this.state.isLoggedIn){
            message = <div>Logged in </div>;
        }
        else{
            message =  <div>Logegd out </div>
        }
        return (
            
            <div>
                 
                {message}
            </div>
        )
    }
}

export default ConditionalRendering
