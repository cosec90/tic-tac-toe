import React from 'react'
import './style.css'
function ListRendering() {
    const names = ["Bruce","Clark","Diana",'Allen'];
    return (
        <div>
           {
               names.map( (name,index) => <h2 key={index} className="heading">{name}</h2> )
           }
        </div>
    )
}
export default ListRendering
