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

  // TODO: CRIE NO PIPE UM mkeLog USER COM A REPLICA DO MODULO ABAIXO
  // const createmkeLog = remakerCreatemkeLoggUser('createClienteFisico', model?.id)

  // const info: InfoController = {
  //   feedback: feedbacks.createClienteFisicoOk(),
  //   mkeLogRegistrado: !!createmkeLog
  // };

  return await ok(model);
};

export { controllerCreateClienteFisico };
