import { mediatorRepositoryClienteFisico } from "@mediatorClienteFisico";
import { feedbackGlobal } from "@feedbackGlobal";
import { ArgExistClienteFisico } from "../../../../../../_utils/uniques/contracts/clienteFisico/contracts.ts";

const featExistClienteFisico = async (m: ArgExistClienteFisico) => {
  const operation = await mediatorRepositoryClienteFisico?.exist?.exist(m);
  if (typeof operation == "undefined") {
    // Log('nao existe - entao retorno o dado enviado de  entrada')
    return await m;
  } else {
    // Log('ja existe - entao retorno em erro uma excessao')
    throw new Error(feedbackGlobal.alreadyExists);
  }
};

export { featExistClienteFisico };
