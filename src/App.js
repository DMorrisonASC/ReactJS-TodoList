import React, {useState, useEffect} from "react"
import firebase from "./Components/firebase"
import Header from "./Components/Header"
import Todos from "./Components/Todos"
import Footer from "./Components/Footer"
import { Link } from "react-router-dom";

function App() {
    // `allTodos` stores the data firebase into an array of object
    const [allTodos, setTodos] = useState([])
    // 1. Runs once, getting access to the DB. Then, it gets the raw json from it 
    useEffect(() => {
        // 2. Get the firebase object needed to get access to their database. Then...
        const database = firebase.database().ref();
        // ...runs `logData()` if there is any values in the DB and passes any values to it.        
        database.on("value", logData)  
    }, []) 

    function logData(rowData) {
        // 3. store the raw json file in `unFlattenTodo`
        let unFlattenTodo =  [rowData.val()]
        // Component `Todos` can't render the data until it is flatten: "The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth."
        // More detail at "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"
        // 4. Store the flatten array into `flattenTodo`
        let flattenTodo = unFlattenTodo.flatMap(todos => Object.values(todos))  
        // 5. Store `flattenTodo` into the state of `allTodos`
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
    // 6. `todoComponents` maps the array, giving one individual object to one Todo component at a time, looping as times as the number of objects in the array.
    // So if their are five todo objects in `allTodos`, it runs five times 
    let todoComponents = allTodos.map(item => <Link to="/editDeleteTodo"><Todos key={item.id} item={item} handleChange={handleChange}/></Link>)
    console.log(allTodos);
    // Return renders everything to the screen(elements & components). It's always the very last step.
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