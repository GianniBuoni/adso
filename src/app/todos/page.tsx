import { getData } from "@/server/db/todo/todoActions";
import React from "react";
import TodoHub from "./_components/TodoHub";

const TodosPage = async () => {
  const data = await getData();

  return (
    <div className="flex justify-center">
      <div className="md:w-2/5">
        <h1>To Do:</h1>
        <TodoHub todos={data} />
      </div>
    </div>
  );
};

export default TodosPage;
export const revalidate = 0;
export const metadata = {
  title: "To Do",
  description: "My in-app todo list will move to the dashboard soon!",
};
