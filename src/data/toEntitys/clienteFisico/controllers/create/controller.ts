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

type ControllerCreateClienteFisico = (
  a: ClienteFisicoArgs,
) => Promise<HttpResponse<ClienteFisicoModel>>;

export const controllerCreateClienteFisico: ControllerCreateClienteFisico =
  async (
    a,
  ) => {
    const checkArgs: ClienteFisicoArgs = await checkArgsClienteFisico(a);

    const model: ClienteFisicoModel = await saveCreateClienteFisico(checkArgs);

    // const createLog = makeLogUser('createClienteFisico', model?.id)

    // const info: InfoController = {
    //   feedback: feedbacks.createClienteFisicoOk(),
    //   logRegistrado: !!createLog
    // };

    return await ok(model);
  };
