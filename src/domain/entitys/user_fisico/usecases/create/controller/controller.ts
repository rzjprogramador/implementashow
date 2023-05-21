// deno-lint-ignore-file no-explicit-any
import {
  HttpResponse,
  ok,
} from "../../../../../../../global/helpers/httpResponse.ts";
import { UserFisicoArgs, UserFisicoModel } from "../../../contracts.ts";

export const controllerCreateUserFisico = (d: UserFisicoArgs): HttpResponse<UserFisicoModel> => {
  const final: UserFisicoModel = { ...d, id: '1'};
  const feedBackOk = ["criado com sucesso"];
  return ok(final, feedBackOk);
};
