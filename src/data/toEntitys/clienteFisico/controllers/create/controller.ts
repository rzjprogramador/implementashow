import { UserFisicoArgs, UserFisicoModel } from "../../../../../domain/entitys/clienteFisico/contracts.ts";
import { checkArgsUserFisico } from "../../../../../domain/entitys/clienteFisico/usecases/create/features/checkArgs.ts";
import { saveCreateUserFisico } from "../../../../../domain/entitys/clienteFisico/usecases/create/save/save.ts";
import { HttpResponse, ok } from "../../../../../domain/helpers/httpResponse.ts";

type ControllerCreateUserFisicoFN = (
  a: UserFisicoArgs,
) => Promise<HttpResponse<UserFisicoModel>>;

export const controllerCreateUserFisico: ControllerCreateUserFisicoFN = async (
  a,
) => {
  const checkArgs: UserFisicoArgs = await checkArgsUserFisico(a);

  const model: UserFisicoModel = await saveCreateUserFisico(checkArgs);

  // const createLog = makeLogUser('createUserFisico', model?.id)

  // const info: InfoController = {
  //   feedback: feedbacks.createUserFisicoOk(),
  //   logRegistrado: !!createLog
  // };

  return await ok(model);
};
