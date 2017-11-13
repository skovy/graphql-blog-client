import { CommentType } from "./comment";
import { PostType } from "./post";

export interface UserType {
  id: number;
  name?: string;
  posts?: PostType[];
  comments?: CommentType[];
}
