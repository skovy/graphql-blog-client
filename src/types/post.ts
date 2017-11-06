import { Comment } from "./comment";
import { User } from "./user";

export interface Post {
  id: number;
  title?: string;
  author?: User;
  comments?: Comment[];
}
