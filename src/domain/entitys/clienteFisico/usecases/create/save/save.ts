import { repositoryInUseClienteFisico } from "../../../../../../data/unique/controllerApp/controllerApp.ts";
import { ClienteFisicoArgs } from "../../../contracts.ts";
import { pipeCreateClienteFisico } from "../pipe/index.ts";

export const saveCreateClienteFisico = (a: ClienteFisicoArgs) => {
  const pipe = pipeCreateClienteFisico(a);
  const save = repositoryInUseClienteFisico.create(pipe);
  return save;
};
