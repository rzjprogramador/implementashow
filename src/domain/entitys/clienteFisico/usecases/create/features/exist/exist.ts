import { Log } from "../../../../../../../app/dataApp/imports/mod_deps.ts";
import { feedbacks } from "../../../../../../../app/dataApp/literals/feedbacks/feedbacks.ts";
import { mediatorRepositoryClienteFisico } from "../../../../../../../data/unique/clienteFisico/mediator/mediator.ts";
import { ArgExistClienteFisico } from "../../../../contracts.ts";

const featExistClienteFisico = async (m: ArgExistClienteFisico) => {

  const operation = await mediatorRepositoryClienteFisico?.exist?.exist(m)
  if(typeof operation == 'undefined') {
    // Log('nao existe - entao retorno o dado enviado de  entrada')
    return await m
  } else {
    // Log('ja existe - entao retorno em erro uma excessao')
    throw new Error(feedbacks.alreadyExists)
  }

  // if(typeof operation == 'undefined') {
  //   // Log('nao existe - entao retorno o dado enviado de  entrada')
  //   return await m
  // } else {
  //   // Log('ja existe - entao retorno em erro uma excessao')
  //   throw new Error(feedbacks.alreadyExists)
  // }

  // const response = await mediatorRepositoryClienteFisico?.exist?.exist(m);

  // if (typeof response == "undefined") {
  //   return m;
  // } else {
  //   throw new Error(feedbacks.alreadyExists);
  // }
};

export { featExistClienteFisico };
