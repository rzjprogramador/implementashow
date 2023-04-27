import { userProduction } from "../../../../../global/production/user_production.ts";
import { UserArgs, UserRepository } from "../../dynamic/contracts.ts";
import { createEntityUser } from "../../factory/entity.ts";
import { prepareUser, saveUser } from "../../prepare/prepare.ts";

export const executeCreateUser = (
  a: UserArgs,
  repoUser: UserRepository = userProduction.repository,
) => {
  const entity = createEntityUser(a);
  const prepared = prepareUser(entity);
  const saved = saveUser(prepared, repoUser);
  return saved;
};
