import fp from "fastify-plugin";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

async function dbConnector(fastify, options) {
  const sql = neon(process.env.DATABASE_URL);

  fastify.decorate("sql", sql);
}

export default fp(dbConnector);
