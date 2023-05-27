import { mediatorRepositoryClienteFisico } from "../../../../../../data/unique/clienteFisico/mediator/mediator.ts";
import { ClienteFisicoArgs } from "../../../contracts.ts";
import { pipeArgsCreateClienteFisico } from "../pipe/pipeArgs.ts";

export const saveCreateClienteFisico = (a: ClienteFisicoArgs) => {
  const pipe = pipeArgsCreateClienteFisico(a);
  const save = mediatorRepositoryClienteFisico.create.create(pipe);
  return save;
};
