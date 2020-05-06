import React, {useState, useEffect} from "react"
import firebase from "./Components/firebase"
import Header from "./Components/Header"
import Todos from "./Components/Todos"
import Footer from "./Components/Footer"
import { Link } from "react-router-dom";

function App() {  
    const [allTodos, setTodos] = useState([])  
    useEffect(() => {
        const database = firebase.database().ref();
        database.on("value", logData)  
    }, []) 

    function logData(rowData) {    
        setTodos(rowData.val())
    } 
    function handleChange(id) {
            const updatedTodos = allTodos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        setTodos(updatedTodos)                
    }
    const todoComponents = allTodos.map(item => <Todos key={item.id} item={item} handleChange={handleChange}/>)
    return (
        <div>
            <Header />
            <div className="todo-list">
                <Link to="/createtodo">Add Todo!</Link>
                {todoComponents}
            </div>  
            <Footer /> 
        </div>                             
    )
}

export default App