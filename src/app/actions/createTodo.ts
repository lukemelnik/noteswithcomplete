/** @format */
"use server";
import db from "../db/db";

export default async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;
  const newNote = await db.todo.create({
    data: {
      title,
    },
  });
}
