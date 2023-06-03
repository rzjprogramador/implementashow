import {
  ArgExistClienteFisico,
  mediatorRepositoryClienteFisico,
} from "../../../clienteFisico.deps.ts";
import { feedbacksGlobal } from "../../../../../helpers/helpersDeps.deps.ts";

const featExistClienteFisico = async (m: ArgExistClienteFisico) => {
  const operation = await mediatorRepositoryClienteFisico?.exist?.exist(m);
  if (typeof operation == "undefined") {
    // Log('nao existe - entao retorno o dado enviado de  entrada')
    return await m;
  } else {
    // Log('ja existe - entao retorno em erro uma excessao')
    throw new Error(feedbacksGlobal.alreadyExists);
  }
};

export { featExistClienteFisico };
