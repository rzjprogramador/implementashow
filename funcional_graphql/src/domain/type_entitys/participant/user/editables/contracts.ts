import { ImportRegistersType } from "../../../../../global/imports/mod_deps.ts";

export type UserModel = UserArgs & ImportRegistersType;

export interface UserArgs {
  primeiroNome: string;
  texto: string;
  numeroInteiro: number;
}

// responses
// export type ResponsePrepareUser = UserModel | Error;

// functions
export type participant1CoreFN = (args: UserArgs) => UserModel;

export interface UserRepository {
  _items?: UserModel[];
  create: (u: UserModel) => UserModel;
  list: () => UserModel[];
}
