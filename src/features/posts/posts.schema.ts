import { RouteShorthandOptions } from "fastify";

export const create: RouteShorthandOptions = {
  schema: {
    body: {
      type: "object",
      properties: {
        title: { type: "string" },
        content: { type: "string" },
      },
      required: ["title"],
    },
  },
};

export const getById: RouteShorthandOptions = {
  schema: {
    params: {
      id: { type: "integer" },
    },
  },
};

export const deleteById: RouteShorthandOptions = {
  schema: {
    params: {
      id: { type: "integer" },
    },
  },
};

export const updateById: RouteShorthandOptions = {
  schema: {
    params: {
      id: { type: "integer" },
    },
    body: {
      type: "object",
      properties: {
        id: { type: "integer" },
        title: { type: "string" },
        content: { type: "string" },
      },
    },
  },
};
