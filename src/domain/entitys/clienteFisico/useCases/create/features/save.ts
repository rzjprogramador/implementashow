import {
  ClienteFisicoArgs,
  mediatorRepositoryClienteFisico,
  pipeArgsCreateClienteFisico,
} from "../../../clienteFisico.deps.ts";

const saveCreateClienteFisico = (a: ClienteFisicoArgs) => {
  const pipe = pipeArgsCreateClienteFisico(a);
  const save = mediatorRepositoryClienteFisico.create.create(pipe);
  return save;
};

export { saveCreateClienteFisico };
