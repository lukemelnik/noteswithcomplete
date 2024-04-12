/** @format */
"use server";
import { redirect } from "next/navigation";
import db from "../db/db";

export default async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;
  await db.todo.create({
    data: {
      title,
    },
  });
  redirect("/");
}
