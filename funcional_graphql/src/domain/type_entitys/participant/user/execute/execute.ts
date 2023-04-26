import { UserArgs } from "../editables/contracts.ts";
import { createEntityUser } from "../factory/model.ts";
import { prepareUser, saveUser } from "../prepare/prepare.ts";
import { userRepositoryFirebase } from "../repository/user_repository_firebase.ts";


export const ExecuteUser = (a: UserArgs) => {
  const entity = createEntityUser(a);
  const prepared = prepareUser(entity);
  const saved = saveUser(prepared, userRepositoryFirebase);
  return saved;
};