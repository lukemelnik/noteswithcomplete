/** @format */

import Image from "next/image";
import createTodo from "./actions/createTodo";
import db from "./db/db";
import getTodos from "./actions/getTodos";
import TodoItem from "./components/TodoItem";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="m-20">
      <form action={createTodo} className="flex flex-col gap-3">
        <h1 className="text-2xl font-extrabold">TODOS:</h1>
        <h3>Add todo:</h3>
        <div>
          <label className="mr-5" htmlFor="title">
            Title
          </label>
          <input
            className="rounded px-3 py-1 w-full text-gray-950"
            type="text"
            name="title"
          />
        </div>
        <button className="bg-gray-300 text-gray-950 px-3 py-1 rounded">
          Add
        </button>
      </form>
      <ul className="mt-5">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
}
