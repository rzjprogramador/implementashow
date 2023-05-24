import { repositoryInUse } from "../../../../../../data/unique/controllerApp/clienteFisico/controllerApp.ts";
import { ClienteFisicoArgs } from "../../../contracts.ts";
import { pipeCreateClienteFisico } from "../pipe/index.ts";

export const saveCreateClienteFisico = (a: ClienteFisicoArgs) => {
  const pipe = pipeCreateClienteFisico(a);
  const save = repositoryInUse.create(pipe);
  return save;
};
