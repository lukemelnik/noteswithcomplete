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
  };
};

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li key={todo.id} className="border-2 border-gray-300 rounded-lg p-5 mb-3">
      <div className="flex justify-between ">
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="cursor-pointer peer"
            defaultChecked={todo.complete}
            id={todo.id}
            onChange={() => toggleCompleteTodo(todo.id, todo.complete)}
          />
          <label
            htmlFor={todo.id}
            className="cursor-pointer peer-checked:line-through peer-checked:text-gray-400"
          >
            {todo.title}
          </label>
        </div>
        <button onClick={() => deleteTodo(todo.id)}>X</button>
      </div>
      <p>Created at: {todo.createdAt.toLocaleDateString()}</p>
    </li>
  );
}
