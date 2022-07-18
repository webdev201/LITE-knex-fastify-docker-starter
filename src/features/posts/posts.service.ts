import knex from "../../config/database";
import { CreatePost } from "./posts.types";

export const getAll = () => {
  return knex("posts").select("*");
};

export const getById = (id: number) => {
  return knex("posts").select("*").where({ id });
};

export const create = (post: CreatePost) => {
  return knex("posts").insert(post);
};

export const updateById = (id: number, post: CreatePost) => {
  return knex("posts").update(post).where({ id });
};

export const deleteById = (id: number) => {
  return knex("posts").where({ id }).del();
};
