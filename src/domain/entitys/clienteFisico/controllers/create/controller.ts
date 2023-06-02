import { HttpResponse, ok } from "@httpResponse";
import { ClienteFisicoArgs, ClienteFisicoModel } from "@contractsClienteFisico";
import { validateArgsClienteFisico } from "@featuresArgsCreateClienteFisico/args/validateArgs.ts";
import { saveCreateClienteFisico } from "@featuresArgsCreateClienteFisico/args/save.ts";

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
