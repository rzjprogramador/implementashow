// deno-lint-ignore-file no-explicit-any

import { HttpResponse, ok } from "../../../../../global/helpers/httpResponse.ts";
import { feedbacks } from "../../../../../global/literals/feedbacks.ts";
import { UserFisicoArgs, UserFisicoModel } from "../../../../domain/entitys/user_fisico/contracts.ts";
import { checkArgsUserFisico } from "../../../../domain/entitys/user_fisico/usecases/create/features/checkArgs.ts";
import { saveCreateUserFisico } from "../../../../domain/entitys/user_fisico/usecases/create/save/save.ts";

type ControllerCreateUserFisicoFN = (
  a: UserFisicoArgs,
) => Promise<HttpResponse<UserFisicoModel>>;

export const controllerCreateUserFisico: ControllerCreateUserFisicoFN = async (
  a,
) => {
  const checkArgs: UserFisicoArgs = await checkArgsUserFisico(a)

  const model: UserFisicoModel = await saveCreateUserFisico(checkArgs);

  const feedBackOk = [feedbacks.createOk];
  return await ok(model, feedBackOk);
};
