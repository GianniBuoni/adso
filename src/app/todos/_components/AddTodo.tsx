"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";

const AddTodo = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await axios.post("/api/todos", data);
    reset();
    router.refresh();
  };

  return (
    <form
      className="flex w-full justify-between space-x-2 pt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="New to do . . . "
        className="input input-bordered w-full"
        {...register("text")}
      />
      <button type="submit" className="btn btn-primary">
        Submit!
      </button>
    </form>
  );
};

export default AddTodo;
