import { getData } from "@/server/db/todo/todoActions";
import React from "react";
import TodoHub from "./_components/TodoHub";
import AddTodo from "./_components/AddTodo";
import { hubCard } from "@/styles/classNames";

const TodosPage = async () => {
  const todoList = await getData();

  return (
    <div className={`${hubCard} md:w-2/5`}>
      <h1>To Do:</h1>
      <TodoHub todos={todoList} />
      <AddTodo />
    </div>
  );
};

export default TodosPage;
export const revalidate = 0;
export const metadata = {
  title: "To Do",
  description: "My in-app todo list will move to the dashboard soon!",
};
