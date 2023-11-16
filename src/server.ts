import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from "@fastify/cors";

const app = fastify();

app.register(cors, {
    origin: ['https://localhost:3333']
});

app.register(memoriesRoutes);

app.listen({ port: 3333 }).then(() => {
    console.log("HTTP server running on http://localhost:3333");
});