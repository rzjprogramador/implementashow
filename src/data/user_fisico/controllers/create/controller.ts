// deno-lint-ignore-file no-explicit-any

import {
  HttpResponse,
  InfoController,
  ok,
} from "../../../../../global/helpers/httpResponse.ts";
import { modObjectDateLog } from "../../../../../global/imports/mod_deps.ts";
import { feedbacks } from "../../../../../global/literals/feedbacks.ts";
import {
  UserFisicoArgs,
  UserFisicoModel,
} from "../../../../domain/entitys/user_fisico/contracts.ts";
import { checkArgsUserFisico } from "../../../../domain/entitys/user_fisico/usecases/create/features/checkArgs.ts";
import { saveCreateUserFisico } from "../../../../domain/entitys/user_fisico/usecases/create/save/save.ts";
import { LogUser } from "../../../finds/logs/index.ts";
import { makeLogUser } from "../../../finds/logs/makeLogUser.ts";

type ControllerCreateUserFisicoFN = (
  a: UserFisicoArgs,
) => Promise<HttpResponse<UserFisicoModel>>;

export const controllerCreateUserFisico: ControllerCreateUserFisicoFN = async (
  a,
) => {
  const checkArgs: UserFisicoArgs = await checkArgsUserFisico(a);

  const model: UserFisicoModel = await saveCreateUserFisico(checkArgs);

  const createLog = makeLogUser('createUserFisico', model?.id)

  const info: InfoController = {
    feedback: feedbacks.createUserFisicoOk(),
    logRegistrado: !!createLog
  };

  return await ok(model, info);
};
