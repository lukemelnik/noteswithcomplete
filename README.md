## Notes app with the abilty to toggle complete (Using NextJS, Tailwind, Prisma) 

### Takeaways: 

1. Had to be more specific about date formatting coming from the db, otherwise it caused a hydration error

```
   <p>Created at: {todo.createdAt.toLocaleDateString("en-US")}</p> // specified en-US formatting
```

2. Server actions need a redirect in order to show the updated data:

```
   export default async function deleteTodo(id: string) {
     const deletedTodo = await db.todo.delete({
       where: {
         id,
       },
     });
     redirect("/");
   }
```
3. When the form action has multiple steps it has to be marked as async (as opposed to action={createTodo}:

```
      action={async (FormData) => {
        createTodo(FormData);
        setNewTodo("");
      }}
```
