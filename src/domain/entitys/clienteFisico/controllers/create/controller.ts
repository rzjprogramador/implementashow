import {
  ClienteFisicoArgs,
  ClienteFisicoModel,
  saveCreateClienteFisico,
  validateArgsClienteFisico,
  HttpResponse,
  ok,
} from "../../../../../../topLevel/deps/_deps.deps.ts";

type ControllerCreateClienteFisico = (
  a: ClienteFisicoArgs,
) => Promise<HttpResponse<ClienteFisicoModel>>;

const controllerCreateClienteFisico: ControllerCreateClienteFisico = async (
  a,
) => {
  const checkArgs: ClienteFisicoArgs = await validateArgsClienteFisico(a);

  const model: ClienteFisicoModel = await saveCreateClienteFisico(checkArgs);

  // const createLog = makeLogUser('createClienteFisico', model?.id)

  // const info: InfoController = {
  //   feedback: feedbacks.createClienteFisicoOk(),
  //   logRegistrado: !!createLog
  // };

  return await ok(model);
};

export { controllerCreateClienteFisico };
