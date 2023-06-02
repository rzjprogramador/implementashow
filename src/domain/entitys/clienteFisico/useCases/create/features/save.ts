import {
  ClienteFisicoArgs,
  mediatorRepositoryClienteFisico,
} from "../../../deps.deps.ts";
import { pipeArgsCreateClienteFisico } from "../../subDeps.deps.ts";

const saveCreateClienteFisico = (a: ClienteFisicoArgs) => {
  const pipe = pipeArgsCreateClienteFisico(a);
  const save = mediatorRepositoryClienteFisico.create.create(pipe);
  return save;
};

export { saveCreateClienteFisico };
