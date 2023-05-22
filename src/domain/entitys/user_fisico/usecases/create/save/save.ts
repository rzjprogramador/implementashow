import { UserFisicoArgs, UserFisicoModel } from "../../../contracts.ts";
import { repositoryInUse } from "../../../variables/variables.ts";
import { pipeCreateUserFisico } from "../pipe/index.ts";


export const saveCreateUserFisico = (a: UserFisicoArgs) => {
  const pipe = pipeCreateUserFisico(a);
  const save = repositoryInUse.create(pipe);
  return save;
};
