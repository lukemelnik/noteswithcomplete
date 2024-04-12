/** @format */

import Image from "next/image";
import createTodo from "./actions/createTodo";
import db from "./db/db";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <div className="m-20">
      <h1 className="text-2xl font-extrabold">TODOS:</h1>
      <form action={createTodo} className="flex flex-col gap-3">
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
          return (
            <li key={todo.id} className="flex justify-between">
              <div>
                <input
                  type="checkbox"
                  defaultChecked={todo.complete}
                  className="mr-2"
                />
                {todo.title}
              </div>
              <button>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
