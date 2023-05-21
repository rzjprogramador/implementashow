// deno-lint-ignore-file no-explicit-any
import {
  HttpResponse,
  ok,
} from "../../../../../../../global/helpers/httpResponse.ts";
import { UserFisicoArgs } from "../../../contracts.ts";

export const controllerCreateUserFisico = (d: UserFisicoArgs): HttpResponse => {
  const final = { ...d, id: "1" };
  const feedBackOk = ["criado com sucesso"];
  return ok(final, feedBackOk);
};
