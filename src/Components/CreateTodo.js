import React from 'react';
import { Link } from "react-router-dom";

function CreateTodo() {
    return(
        <div>
            <h2>I create Todos!</h2>
            <input>
            </input>
            <button>Add Todo!</button>
            <Link to="/">
            <button>Cancel</button>
            </Link>

        </div>
    )
}

export default CreateTodo;