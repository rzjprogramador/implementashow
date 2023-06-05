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

  // TODO: CRIE NO PIPE UM Log USER COM A REPLICA DO MODULO ABAIXO
  // const createLog = remakerCreateLoggUser('createClienteFisico', model?.id)

  // const info: InfoController = {
  //   feedback: feedbacks.createClienteFisicoOk(),
  //   LogRegistrado: !!createLog
  // };

  return await ok(model);
};

export { controllerCreateClienteFisico };
