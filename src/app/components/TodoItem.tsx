/** @format */
"use client";
import React from "react";
import deleteTodo from "../actions/deleteTodo";
import toggleCompleteTodo from "../actions/toggleCompleteTodo";

type TodoItemProps = {
  todo: {
    id: string;
    title: string;
    complete: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
};

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li key={todo.id} className="mb-3 rounded-lg border-2 border-gray-300 p-5">
      <div className="flex justify-between ">
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="peer cursor-pointer"
            defaultChecked={todo.complete}
            id={todo.id}
            onChange={() => toggleCompleteTodo(todo.id, todo.complete)}
          />
          <label
            htmlFor={todo.id}
            className="cursor-pointer hover:text-yellow-300 peer-checked:text-gray-400 peer-checked:line-through"
          >
            {todo.title}
          </label>
        </div>
        <button onClick={() => deleteTodo(todo.id)}>X</button>
      </div>
      <p>Created at: {todo.createdAt.toLocaleDateString("en-US")}</p>
    </li>
  );
}
