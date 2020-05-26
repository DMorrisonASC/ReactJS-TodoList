import React from 'react';
// import firebase from "./Components/firebase"

function Todos(props){
    return(
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)} 
            />
            <p>{props.item.text}</p>  
        </div>
    )
}

export default Todos;