import {
  ClienteFisicoArgs,
  ClienteFisicoModel,
} from "../../../../../domain/entitys/clienteFisico/contracts.ts";
import { checkArgsClienteFisico } from "../../../../../domain/entitys/clienteFisico/usecases/create/features/checkArgs.ts";
import { saveCreateClienteFisico } from "../../../../../domain/entitys/clienteFisico/usecases/create/save/save.ts";
import {
  HttpResponse,
  ok,
} from "../../../../../domain/helpers/httpResponse.ts";

type ControllerCreateUserFisicoFN = (
  a: ClienteFisicoArgs,
) => Promise<HttpResponse<ClienteFisicoModel>>;

export const controllerCreateUserFisico: ControllerCreateUserFisicoFN = async (
  a,
) => {
  const checkArgs: ClienteFisicoArgs = await checkArgsClienteFisico(a);

  const model: ClienteFisicoModel = await saveCreateClienteFisico(checkArgs);

  // const createLog = makeLogUser('createUserFisico', model?.id)

  // const info: InfoController = {
  //   feedback: feedbacks.createUserFisicoOk(),
  //   logRegistrado: !!createLog
  // };

  return await ok(model);
};
