import { todosType } from "@/server/db/todo/zodSchemas";
import { editTodo } from "@/server/db/todo/todoActions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface Props {
  todo: todosType;
}

const TodoLabel = ({ todo }: Props) => {
  const [editing, setEditing] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handlePost = (data: FieldValues) => {
    editTodo(todo.id, data.text);
    setEditing(!editing);
    router.refresh();
  };

  if (editing)
    return (
      <form onSubmit={handleSubmit(handlePost)} className="w-96">
        <input
          defaultValue={todo.text}
          className="input input-sm input-bordered w-full"
          {...register("text")}
        />
      </form>
    );
  return (
    <div className="label-text mt-0.5" onClick={handleEdit}>
      {todo.text}
    </div>
  );
};

export default TodoLabel;
