import {
  ClienteFisicoArgs,
  ClienteFisicoModel,
  HttpResponse,
  ok,
  saveCreateClienteFisico,
  validateArgsClienteFisico,
} from "@depsClienteFisico";

type ControllerCreateClienteFisico = (
  a: ClienteFisicoArgs,
) => Promise<HttpResponse<ClienteFisicoModel>>;

const controllerCreateClienteFisico: ControllerCreateClienteFisico = async (
  a,
) => {
  const checkArgs: ClienteFisicoArgs = await validateArgsClienteFisico(a);

  const model: ClienteFisicoModel = await saveCreateClienteFisico(checkArgs);

  // TODO: CRIE NO PIPE UM LOG USER COM A REPLICA DO MODULO ABAIXO
  // const createLog = remakerCreateLoggUser('createClienteFisico', model?.id)

  // const info: InfoController = {
  //   feedback: feedbacks.createClienteFisicoOk(),
  //   logRegistrado: !!createLog
  // };

  return await ok(model);
};

export { controllerCreateClienteFisico };
