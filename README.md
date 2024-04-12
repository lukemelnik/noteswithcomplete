## Notes app with the abilty to toggle complete (Using NextJS, Tailwind, Prisma) 

# Takeaways: 

1. Had to be more specific about date formatting coming from the db, otherwise it caused a hydration error

   ```
         <p>Created at: {todo.createdAt.toLocaleDateString("en-US")}</p> // specified en-US formatting
   ```

2. 
