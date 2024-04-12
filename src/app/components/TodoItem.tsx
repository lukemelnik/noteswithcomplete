/** @format */
"use client";
import React from "react";
import deleteTodo from "../actions/deleteTodo";

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
      <div>
        <input
          type="checkbox"
          defaultChecked={todo.complete}
          className="mr-2"
          onChange={() => toggleCompleteTodo(todo.id)}
        />
        {todo.title}
      </div>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </li>
  );
}
