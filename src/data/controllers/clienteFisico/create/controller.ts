import { HttpResponse, ok } from "../../../../app/helpers/httpResponse.ts";
import {
  ClienteFisicoArgs,
  ClienteFisicoModel,
} from "../../../../domain/entitys/clienteFisico/contracts.ts";
import { saveCreateClienteFisico } from "../../../../domain/entitys/clienteFisico/usecases/create/features/save.ts";
import { validateArgsClienteFisico } from "../../../../domain/entitys/clienteFisico/usecases/create/features/validateArgs.ts";

type ControllerCreateClienteFisico = (
  a: ClienteFisicoArgs,
) => Promise<HttpResponse<ClienteFisicoModel>>;

export const controllerCreateClienteFisico: ControllerCreateClienteFisico =
  async (
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
