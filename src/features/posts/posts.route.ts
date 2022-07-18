import { FastifyPluginCallback } from "fastify";

import * as postHandler from "./posts.handler";
import * as schema from "./posts.schema";
import { CreatePost, PostParamId } from "./posts.types";

const router: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get("/", postHandler.getAll);

  fastify.post<{ Body: CreatePost }>("/", schema.create, postHandler.create);

  fastify.get<{ Params: PostParamId }>(
    "/:id",
    schema.getById,
    postHandler.getById
  );

  fastify.delete<{ Params: PostParamId }>(
    "/:id",
    schema.deleteById,
    postHandler.deleteById
  );

  fastify.patch<{ Params: PostParamId; Body: CreatePost }>(
    "/:id",
    schema.updateById,
    postHandler.updateById
  );
  done();
};

export default router;
