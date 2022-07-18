import fastify from "fastify";
import "dotenv/config";

import routes from "./src/routes";

const server = fastify({
  logger: true,
});

const port = process.env.PORT || 4000;

server.register(routes);

server.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
