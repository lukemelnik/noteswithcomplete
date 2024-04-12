/** @format */

import Image from "next/image";
import createTodo from "./actions/createTodo";
import db from "./db/db";
import getTodos from "./actions/getTodos";
import TodoItem from "./components/TodoItem";
import NewTodoForm from "./components/NewTodoForm";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="m-20">
      <NewTodoForm />
      <ul className="mt-5">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
}
