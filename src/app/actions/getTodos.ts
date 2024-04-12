/** @format */
"use server";
import db from "../db/db";

export default async function getTodos() {
  const todos = await db.todo.findMany();
  return todos;
}
