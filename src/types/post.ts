import { CommentType } from "./comment";
import { UserType } from "./user";

export interface PostType {
  id: number;
  title?: string;
  text?: string;
  author: UserType;
  comments?: CommentType[];
  createdAt?: Date;
}
