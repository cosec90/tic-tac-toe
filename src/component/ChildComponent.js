import React from 'react'

function ChildComponent(props) {
    const {messageHandler} = props;
    return (
        <div>
           {/* <button onClick={ () => props.messageHandler('childComponent')}>Click to call parent function</button>  */}
           <button onClick={messageHandler}>Click to call parent function</button> 
        </div>
    )
}

export default ChildComponent
