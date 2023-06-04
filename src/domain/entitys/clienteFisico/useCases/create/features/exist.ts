import {
  ArgExistClienteFisico,
  feedbacksGlobal,
  mediatorRepositoryClienteFisico,
} from "@depsClienteFisico";

const featExistClienteFisico = async (m: ArgExistClienteFisico) => {
  const operation = await mediatorRepositoryClienteFisico?.exist?.exist(m);
  if (typeof operation == "undefined") {
    // mkeLog('nao existe - entao retorno o dado enviado de  entrada')
    return await m;
  } else {
    // mkeLog('ja existe - entao retorno em erro uma excessao')
    throw new Error(feedbacksGlobal.alreadyExists);
  }
};

export { featExistClienteFisico };
