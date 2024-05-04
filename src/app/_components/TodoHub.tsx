import React from "react";
import { todosType } from "@/server/db/todo/zodSchemas";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

interface Props {
  todos: todosType[];
}

const TodoHub = ({ todos }: Props) => {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <AddTodo />
    </div>
  );
};

export default TodoHub;
