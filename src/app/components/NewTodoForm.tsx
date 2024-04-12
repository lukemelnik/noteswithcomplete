/** @format */
"use client";
import React, { useState } from "react";
import createTodo from "../actions/createTodo";

export default function NewTodoForm() {
  const [newTodo, setNewTodo] = useState("");
  return (
    <form
      action={async (FormData) => {
        createTodo(FormData);
        setNewTodo("");
      }}
      className="flex flex-col gap-3"
    >
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
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <button className="bg-gray-300 text-gray-950 px-3 py-1 rounded w-1/2">
        Add
      </button>
    </form>
  );
}
