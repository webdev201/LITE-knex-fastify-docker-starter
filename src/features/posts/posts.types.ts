import { Post } from "../../../knex/types/models";

export type PostParamId = {
  id: number;
};

export type CreatePost = Omit<Post, "id" | "created_at" | "updated_at">;
