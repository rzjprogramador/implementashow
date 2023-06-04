import {
  IClienteFisicoArgs,
  IClienteFisicoModel,
  IHttpResponse,
  ok,
  saveCreateClienteFisico,
  validateArgsClienteFisico,
} from "@clienteFisico";

type ControllerCreateClienteFisico = (
  a: IClienteFisicoArgs,
) => Promise<IHttpResponse<IClienteFisicoModel>>;

const controllerCreateClienteFisico: ControllerCreateClienteFisico = async (
  a,
) => {
  const checkArgs: IClienteFisicoArgs = await validateArgsClienteFisico(a);

  const model: IClienteFisicoModel = await saveCreateClienteFisico(checkArgs);

  // TODO: CRIE NO PIPE UM mkeLog USER COM A REPLICA DO MODULO ABAIXO
  // const createmkeLog = remakerCreatemkeLoggUser('createClienteFisico', model?.id)

  // const info: InfoController = {
  //   feedback: feedbacks.createClienteFisicoOk(),
  //   mkeLogRegistrado: !!createmkeLog
  // };

  return await ok(model);
};

export { controllerCreateClienteFisico };
