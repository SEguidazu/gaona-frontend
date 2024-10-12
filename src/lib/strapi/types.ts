export type CreateUser = {
  username: string;
  email: string;
  password: string;
  role: Role;
};

export enum Role {
  Authenticated = 1,
  Public = 2,
  Customer = 3,
}
