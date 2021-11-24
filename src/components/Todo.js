import React from "react";

const Todo = ({ text, id, setTodos, todos, todo }) => {
  const deleteHandler = () => {
    //console.log(todo); // al hacer click en delete, mostramos el to-do con el que construimos ese <li>
    setTodos(todos.filter((el) => el.id !== todo.id)); // de la lista de to-doS, filtra todos menos el to-do de ese <li>. Modifica la lista con setTodos.
  }; // dame todo lo que no sea ese elemento que he clickado... ¿true? dámelo, cuando sea false entonces no me lo des.

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        //itera en la lista to-doS
        if (item.id === todo.id)
          // si el todo.id de ese <li>, lo encuentras en la lista...
          return {
            // entonces cambia el apartado "completed"
            ...item,
            completed: !item.completed,
          };
        return item;
      })
    );
  };
  // le damos un class diferente en funcion de si es completed o no:
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`} key={id}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
