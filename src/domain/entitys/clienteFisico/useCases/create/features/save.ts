import {
  IClienteFisicoArgs,
  mediatorRepositoryClienteFisico,
  pipeArgsCreateClienteFisico,
} from "@clienteFisico";

const saveCreateClienteFisico = (a: IClienteFisicoArgs) => {
  const pipe = pipeArgsCreateClienteFisico(a);
  const save = mediatorRepositoryClienteFisico.create.create(pipe);
  return save;
};

export { saveCreateClienteFisico };
