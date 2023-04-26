import { importRegisters } from "../../../../../global/imports/mod_deps.ts";
import { UserArgs, UserModel, UserRepository } from "../editables/contracts.ts";
import { userRepositoryFirebase } from "../repository/user_repository_firebase.ts";
import { protoUser } from "./members.ts";

const userFactoryByArgs = (u: UserArgs) => {
  const prototype = Object.create(protoUser);
  const newCore = { ...prototype, ...u };
  return newCore;
};

export const createEntityUser = (f: UserArgs) => {
  const protoCore = userFactoryByArgs(f);
  const model = {
    ...protoCore,
    ...importRegisters.identifiers,
    ...importRegisters.dates,
  };
  return model;
};




