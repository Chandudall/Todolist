import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [input, setInput] = useState("");
  var [task, setTask] = useState([]);
  var [count, setCounter] = useState(0);
  // function typing(event){

  //    setInput(event.target.value);
  //    //console.log(input)
  // }

  function inputClick(event) {
    event.preventDefault();

    var Input = document.getElementById("NewTodo").value;
    // console.log(Input);
    setTask([...task, Input]);

    setInput(Input);
    input.value = "";
    input = Input;
    setInput(input);
    setCounter(count + 1);
  }
  function AllClear(event) {
    event.preventDefault();
    setTask([]);
  }
  function removeFirst(arr) {
    return arr.slice(1);
  }
  function deleteTask(event) {
    event.preventDefault();
    setTask(removeFirst(task));
  }

  function choose(event) {
    event.preventDefault();
    setTask([count]);
  }

  return (
    <div className="App">
      <form id="todoList">
        <h2 id="heading">Todoinput</h2>
        <br />
        <section id="headPart">
          <input id="NewTodo"></input>
          <br />
          <button id="addTask" onClick={inputClick}>
            Add New Task
          </button>
        </section>
        <section id="secondPart">
          <h2>ToDoList</h2>
          <div id="button">
            <button id="All" onClick={AllClear}>
              All
            </button>
            <button id="Done" onClick={deleteTask}>
              Done
            </button>
            <button id="Todo" onClick={choose}>
              Todo
            </button>
          </div>
        </section>
        <section id="thirdPart">
          <div id="output">
            {task.map((task, index) => (
              <p key={index}>{task}</p>
            ))}
          </div>
        </section>
      </form>
    </div>
  );
}
