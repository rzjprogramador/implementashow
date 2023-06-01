import { HttpResponse, ok } from "@httpResponse";
import { ClienteFisicoArgs, ClienteFisicoModel } from "@clienteFisicoContracts";
import { validateArgsClienteFisico } from "../../../features/create/args/validateArgs.ts";
import { saveCreateClienteFisico } from "../../../features/create/args/save.ts";

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
