import React from 'react';

function Todos(props){
    return(
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={props.item.completed}
                onChange={(e) => props.handleChange(props.item.id, e)} 
            />
            <p>{props.item.text}</p>
            <br />
            <form onSubmit={props.onSubmit}>
                <input 
                    type="text" 
                    name={props.item.id} 
                    placeholder={props.item.text} 
                    onChange={(e) => props.handleChange(props.item.id, e)} 
                />
                <button>Edit</button>
                <button>Delete</button>                
            </form>
        </div>
    )
}

export default Todos;