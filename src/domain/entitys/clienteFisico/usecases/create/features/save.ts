import { mediatorRepositoryClienteFisico } from "../../../../../../data/unique/mediator/clienteFisico/mediator.ts";
import { ClienteFisicoArgs } from "../../../contracts.ts";
import { pipeCreateClienteFisico } from "../pipe/index.ts";

export const saveCreateClienteFisico = (a: ClienteFisicoArgs) => {
  const pipe = pipeCreateClienteFisico(a);
  const save = mediatorRepositoryClienteFisico.create.create(pipe);
  return save;
};
