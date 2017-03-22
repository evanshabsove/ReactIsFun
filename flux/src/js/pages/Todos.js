import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class Todos extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   todos: [
    //     {
    //       id: 113464613,
    //       text: "Go Shopping",
    //       complete: false
    //     },
    //     {
    //       id: 235684679,
    //       text: "Pay Bills",
    //       complete: false
    //     },
    //   ],
    // };

    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  render() {
    const { todos } = this.state;
    console.log(todos);
    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
