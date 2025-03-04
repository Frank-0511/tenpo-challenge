export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export interface User {
  id: { value: string } | null;
  name: { first: string; last: string };
  email: string;
  picture: { thumbnail: string };
  gender: Gender;
  phone: string;
  cell: string;
}

export interface GetUserResponse {
  results: User[];
  info: { seed: string; results: number; page: number; version: string };
}
