import React, {useRef} from 'react';

function Todos(props){
    const inputRef = useRef(null);
    return(
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={props.item.completed}
                onChange={(e) => props.handleChange(props.item.id, e)} 
            />
            <p>{props.item.text}</p>
            <br />
            <form onSubmit={(e) => props.onSubmit(e)}>
                <input 
                    type="text" 
                    name={props.item.id} 
                    placeholder={props.item.text} 
                    ref={inputRef}
                    onChange={(e) => props.handleChange(props.item.id, e)} 
                />
                {/* <button
                    name="Edit"
                    onChange={(e) => props.handleChange(props.item.id, e)}
                >Edit</button> */}
                <input
                    type="submit"
                    name="EditBtn"
                    value="Edit"
                    onChange={(e) => props.handleChange(props.item.id, e)}
                />
                <input
                    type="submit"
                    name="DeleteBtn"
                    value="Delete"
                    onChange={(e) => props.handleChange(props.item.id, e)}
                /> 
                      
            </form>
        </div>
    )
}

export default Todos;