import { mediatorRepositoryClienteFisico } from "@clienteFisicoMediator";
import { ClienteFisicoArgs } from "@clienteFisicoContracts";
import { pipeArgsCreateClienteFisico } from "../../../pipes/createPipeArgs.ts";


const saveCreateClienteFisico = (a: ClienteFisicoArgs) => {
  const pipe = pipeArgsCreateClienteFisico(a);
  const save = mediatorRepositoryClienteFisico.create.create(pipe);
  return save;
};

export { saveCreateClienteFisico };
