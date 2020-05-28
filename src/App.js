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
        let unFlattenTodo =  [rowData.val()]
        let flattenTodo = unFlattenTodo.flatMap(todos => Object.values(todos))
          
        // setTodos([unFlattenTodo]) 
        setTodos(flattenTodo)    
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

    let todoComponents = allTodos.map(item => <Link to="/editDeleteTodo"><Todos key={item.id} item={item} handleChange={handleChange}/></Link>)
    console.log(allTodos); 
    return (
        <div>
            <Header />
            <div className="todo-list">
                <Link to="/createtodo">Add Todo!</Link>
                <Link to="/editDeleteTodo">aaaaaaaaa</Link>
                {todoComponents}
            </div>  
            <Footer /> 
        </div>                             
    )
}

export default App