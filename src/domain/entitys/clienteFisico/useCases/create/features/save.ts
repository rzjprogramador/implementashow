import {
  ClienteFisicoArgs,
  mediatorRepositoryClienteFisico,
  pipeArgsCreateClienteFisico,
} from "../../../../../../../topLevel/deps/_deps.deps.ts";

const saveCreateClienteFisico = (a: ClienteFisicoArgs) => {
  const pipe = pipeArgsCreateClienteFisico(a);
  const save = mediatorRepositoryClienteFisico.create.create(pipe);
  return save;
};

export { saveCreateClienteFisico };
