import { mediatorRepositoryClienteFisico } from "@mediatorClienteFisico";
import { ClienteFisicoArgs } from "@contractsClienteFisico";
import { pipeArgsCreateClienteFisico } from "../../../pipes/pipeArgs/createPipeArgs.ts";

const saveCreateClienteFisico = (a: ClienteFisicoArgs) => {
  const pipe = pipeArgsCreateClienteFisico(a);
  const save = mediatorRepositoryClienteFisico.create.create(pipe);
  return save;
};

export { saveCreateClienteFisico };
