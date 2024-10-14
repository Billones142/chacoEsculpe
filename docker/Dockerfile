   # docker/Dockerfile
   FROM oven/bun:alpine

   # Set the working directory
   WORKDIR /app

   # Copy package.json and bun.lockb files
   COPY package.json bun.lockb ./

   # Install dependencies
   RUN bun install

   # Copy the rest of the application code
   COPY . .
   COPY .dockerignore .
   RUN rm -rf node_modules

   # Expose the port your app runs on
   EXPOSE 3000

   # Command to run the application
   CMD ["bun", "dev"]