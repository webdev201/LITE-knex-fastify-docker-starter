import { Knex } from "knex";

import { Post } from "./models";

declare module "knex/types/tables" {
  interface Tables {
    /** Posts type for select * */
    posts: Post;
    posts_composite: Knex.CompositeTableType<
      Post,
      /** title and content are mandatory (insert and update) */
      Pick<Post, "title", "content"> &
        /** createdAt and updatedAt are optional*/
        Partial<Pick<Post, "createdAt" | "updatedAt">>,
      /** id cannot be updated */
      Partial<Omit<Post, "id">>
    >;
  }
}
