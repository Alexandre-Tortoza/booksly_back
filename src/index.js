import { createServer } from "./app.js";

const startServer = async () => {
  const server = createServer();

  try {
    await server.listen({ port: 4141 });
    console.log("🚀 Server is running on http://localhost:4141");
  } catch (error) {
    console.error("❌ Error starting server:\n\n", error);
    process.exit(1);
  }
};

startServer();
