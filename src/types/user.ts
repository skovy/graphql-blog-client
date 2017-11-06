import { Comment } from "./comment";
import { Post } from "./post";

export interface User {
  id: number;
  name?: string;
  posts?: Post[];
  comments?: Comment[];
}
