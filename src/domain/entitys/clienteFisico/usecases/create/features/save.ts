import { mediatorRepositoryClienteFisico } from "@clienteFisicoMediatorRepository";
import { ClienteFisicoArgs } from "@clienteFisicoContracts";
import { pipeArgsCreateClienteFisico } from "../pipe/pipeArgs.ts";

export const saveCreateClienteFisico = (a: ClienteFisicoArgs) => {
  const pipe = pipeArgsCreateClienteFisico(a);
  const save = mediatorRepositoryClienteFisico.create.create(pipe);
  return save;
};
