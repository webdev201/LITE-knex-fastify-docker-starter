import { FastifyPluginCallback } from "fastify";

import postRoutes from "../features/posts/posts.route";

const router: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.register(postRoutes, { prefix: "/api/posts" });
  done();
};

export default router;
