import { mediatorRepositoryClienteFisico } from "@clienteFisico";
import { ClienteFisicoArgs } from "@clienteFisico";
import { pipeArgsCreateClienteFisico } from "../pipe/pipeArgs.ts";

const saveCreateClienteFisico = (a: ClienteFisicoArgs) => {
  const pipe = pipeArgsCreateClienteFisico(a);
  const save = mediatorRepositoryClienteFisico.create.create(pipe);
  return save;
};

export { saveCreateClienteFisico };
