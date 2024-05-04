"use client";
import { todosType } from "@/server/db/todo/zodSchemas";
import clsx from "clsx";
import { deleteTodo, toggleTodo } from "@/server/db/todo/todoActions";
import { useRouter } from "next/navigation";
import { TiDelete } from "react-icons/ti";
import TodoLabel from "./TodoLabel";

interface Props {
  todo: todosType;
}

const Todo = ({ todo }: Props) => {
  const router = useRouter();

  const todoCard = clsx({
    "flex flex-row space-x-4 items-center card p-4 opacity-80 transition-colors":
      true,
    "bg-base-200": todo.done,
    "bg-secondary": !todo.done,
  });

  const toggleStyles = clsx({ "toggle toggle-primary opacity-100": true });

  const handleToggle = (data: todosType["id"]) => {
    toggleTodo(data);
    router.refresh();
  };

  const handleDelete = (data: todosType["id"]) => {
    deleteTodo(data);
    router.refresh();
  };

  return (
    <div className={todoCard}>
      <div>
        <TiDelete
          className="cursor-pointer"
          onClick={() => handleDelete(todo.id)}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <TodoLabel todo={todo} />
        {todo.done ? (
          <input
            type="checkbox"
            defaultChecked
            className={toggleStyles}
            onChange={() => handleToggle(todo.id)}
          />
        ) : (
          <input
            type="checkbox"
            className={toggleStyles}
            onChange={() => handleToggle(todo.id)}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
