import { UserArgs } from "../../editables/contracts.ts";
import { createEntityUser } from "../../factory_model/factory_model.ts";
import { prepareUser, saveUser } from "../../prepare/prepare.ts";
import { userRepositoryFirebase } from "../../repository/user_repository_firebase.ts";

export const executeCreateUser = (a: UserArgs) => {
  const entity = createEntityUser(a);
  const prepared = prepareUser(entity);
  const saved = saveUser(prepared, userRepositoryFirebase);
  return saved;
};
