import { UserModel, UserRepository } from "../dynamic/contracts.ts";

export const prepareUser = (u: UserModel) => {
  if (!u) {
    new Error("algo de errado ao criar user");
  }
  const prepared = u;
  return prepared;
};

export const saveUser = (u: UserModel, repo: UserRepository) => {
  return repo.create(u);
};
