import { feedbacks } from "@global";
import { mediatorRepositoryClienteFisico } from "@clienteFisico";
import { ArgExistClienteFisico } from "@clienteFisico";

const featExistClienteFisico = async (m: ArgExistClienteFisico) => {

  const operation = await mediatorRepositoryClienteFisico?.exist?.exist(m)
  if(typeof operation == 'undefined') {
    // Log('nao existe - entao retorno o dado enviado de  entrada')
    return await m
  } else {
    // Log('ja existe - entao retorno em erro uma excessao')
    throw new Error(feedbacks.alreadyExists)
  }
};

export { featExistClienteFisico };
