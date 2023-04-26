import { ImportRegistersType } from "../../../../../global/imports/mod_deps.ts";

export type UserModel = UserArgs & ImportRegistersType;

export interface UserArgs {
  primeiroNome: string;
  texto: string;
  numeroInteiro: number;
}

// functions
export type participant1CoreFN = (args: UserArgs) => UserModel;
