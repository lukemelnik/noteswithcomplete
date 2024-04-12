/** @format */
"use server";

import db from "../db/db";

export default async function toggleCompleteTodo(
  id: string,
  complete: boolean
) {
  const updatedTodo = await db.todo.update({
    where: {
      id,
    },
    data: {
      complete: !complete,
    },
  });
}
