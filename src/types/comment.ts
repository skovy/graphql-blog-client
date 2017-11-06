import { Post } from "./post";
import { User } from "./user";

export interface Comment {
  id: number;
  text?: string;
  post?: Post;
  author?: User;
}
