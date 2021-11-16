import React from "react";
import { useState } from "react";
import "./App.css";
// Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState(""); // por aquí inyectamos los datos a la lista

  return (
    <div className="App">
      <header>
        <h1>Fio's ToDo List</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}
/*
1) pasamos con props la funcion setInputText al componente hijo Form.
2) setInputText cambiará el estado de inputText de "" a "lo que sea que escriba en input"
3) creamos un estado para la lista ToDo que será un array vacío []
4)
*/
export default App;
