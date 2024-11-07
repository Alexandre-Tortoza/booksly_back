// src/app.js
import fastify from "fastify";
import routes from "./routes/index.js";
import db from "./plugins/db.js";

export function createServer() {
  const server = fastify();

  server.register(db);

  routes.forEach((route) => {
    server.register(route, { prefix: "/api" });
  });

  return server;
}
