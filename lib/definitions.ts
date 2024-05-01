export interface User {
  id: string;
  name: string;
  email: string;
  password: string | null;
  emailVerified: Date | null;
  image: string | null;
}

export interface Post {
  id: string;
  userId: string;
  image: string;
  caption: string | null;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
}

export interface UserWithPost {
  id: string;
  name: string;
  email: string;
  password: string | null;
  emailVerified: Date | null;
  image: string | null;
  posts: Array<Post>;
}
