import { mediatorRepositoryClienteFisico } from "@clienteFisico";
import { ClienteFisicoArgs, pipeArgsCreateClienteFisico } from "@clienteFisico";

const saveCreateClienteFisico = (a: ClienteFisicoArgs) => {
  const pipe = pipeArgsCreateClienteFisico(a);
  const save = mediatorRepositoryClienteFisico.create.create(pipe);
  return save;
};

export { saveCreateClienteFisico };
