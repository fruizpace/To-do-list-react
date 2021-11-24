import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
// Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState(""); // por aquí inyectamos los datos a la lista
  const [todos, setTodos] = useState([]); // array con los datos
  const [status, setStatus] = useState("all"); // ponemos por defecto status=all (podrá cambiar a completed/uncompleted)
  const [filteredTodos, setFilteredTodos] = useState([]); // aqui pondremos los to-do's que queremos renderizar en funcion del status

  //UseEffect: ejecuta la(s) funcion(es) X al final del renderizado o cuando Y cambie. Hay que indicárselo:
  useEffect(() => {
    getLocalTodos(); // que se ejecute sólo una vez después de renderizar la web la primera vez.
  }, []);

  useEffect(() => {
    //console.log("useEffect funciona!");
    filterHandler(); // cada vez que status cambie, ejecuta la funcion que filtra la lista todo's
    saveLocalTodos(); // cada vez que se modifque todo's list, guárdalo en localstorage
  }, [todos, status]);

  //Fuctions
  const filterHandler = () => {
    // cuando el valor de status sea completed, filtra los completed true de la lista de to-do's
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Save data to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos)); //si hay, guárdalo como JSON en el localstorage
  };

  // como cada vez que refrescamos la página, perdemos los datos, hay que evitar esto: Recuperar los datos guardados en Local:
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([])); // si no hay nada guardado, crea un array vacío en formato JSON
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos")); //si hay lista, guárdalo como JSON en todoLocal
      setTodos(todoLocal); // ... y actualiza la lista con lo que hay en Local.
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Fio's ToDo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}
/*
Ejercicio: https://www.youtube.com/watch?v=pCA4qpQDZD8&t=3737s
1) pasamos con props la funcion setInputText al componente hijo Form.
2) setInputText cambiará el estado de inputText de "" a "lo que sea que escriba en input"
3) creamos un estado para la lista ToDo que será un array vacío [] y la iremos modificando con los nuevos elementos creados.
4) creamos un estato para el selector: status all, completed, uncompleted
5) creamos un estado con los todo's list filtrado y que iremos modificando en función del estado anterior
*/
export default App;
