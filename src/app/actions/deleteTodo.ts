/** @format */
"use server";
import { redirect } from "next/navigation";

import db from "../db/db";

export default async function deleteTodo(id: string) {
  const deletedTodo = await db.todo.delete({
    where: {
      id,
    },
  });
  redirect("/");
}
