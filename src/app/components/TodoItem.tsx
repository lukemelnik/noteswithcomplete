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
    <li key={todo.id} className="flex justify-between">
      <div className="flex gap-2">
        <input
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={todo.complete}
          onChange={() => toggleCompleteTodo(todo.id, todo.complete)}
        />
        <p className="cursor-pointer peer-checked:line-through peer-checked:text-gray-400">
          {todo.title}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </li>
  );
}
