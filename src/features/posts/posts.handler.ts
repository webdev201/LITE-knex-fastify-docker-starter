import { FastifyReply, FastifyRequest } from "fastify";

import * as postService from "./posts.service";
import { CreatePost, PostParamId } from "./posts.types";

export async function getAll(request: FastifyRequest, reply: FastifyReply) {
  const res = await postService.getAll();
  reply.send(res);
}

export async function getById(
  request: FastifyRequest<{ Params: PostParamId }>,
  reply: FastifyReply
) {
  const { id } = request.params;
  const res = await postService.getById(id);
  reply.send(res);
}

export async function create(
  request: FastifyRequest<{ Body: CreatePost }>,
  reply: FastifyReply
) {
  const post = request.body;
  const res = await postService.create(post);
  reply.send({ id: res?.[0] });
}

export async function updateById(
  request: FastifyRequest<{ Body: CreatePost; Params: PostParamId }>,
  reply: FastifyReply
) {
  const post = request.body;
  const { id } = request.params;
  await postService.updateById(id, post);
  reply.send({});
}

export async function deleteById(
  request: FastifyRequest<{ Params: PostParamId }>,
  reply: FastifyReply
) {
  const { id } = request.params;
  await postService.deleteById(id);
  reply.send({});
}
