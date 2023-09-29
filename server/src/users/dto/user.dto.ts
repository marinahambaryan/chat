export interface User {
  id: number;
  username: string;
}

export interface UsersDictionary {
  [userId: string]: User;
}
