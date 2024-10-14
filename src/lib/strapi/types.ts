export type CreateUser = {
  username: string;
  email: string;
  password: string;
  role: Role;
};

export type Login = {
  identifier: string;
  password: string;
};

export enum Role {
  Authenticated = 1,
  Public = 2,
  Customer = 3,
}
