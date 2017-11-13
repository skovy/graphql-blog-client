import { PostType } from "./post";
import { UserType } from "./user";

export interface CommentType {
  id: number;
  text?: string;
  post?: PostType;
  author?: UserType;
}
