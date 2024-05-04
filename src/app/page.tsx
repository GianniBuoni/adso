import { getShortTodo } from "@/server/db/todo/todoActions";
import TodoHub from "./todo/_components/TodoHub";
import { hubCard } from "@/styles/classNames";

const HomePage = async () => {
  const shortTodoList = await getShortTodo();

  return (
    <div className={`${hubCard} md:w-1/5`}>
      <h1>To Do:</h1>
      <TodoHub todos={shortTodoList} />
    </div>
  );
};

export default HomePage;
