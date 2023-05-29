import { feedbacks } from "../../../../../../../app/dataApp/literals/feedbacks/feedbacks.ts";
import { mediatorRepositoryClienteFisico } from "../../../../../../../data/unique/clienteFisico/mediator/mediator.ts";
import { ArgExistClienteFisico } from "../../../../contracts.ts";

const featExistClienteFisico = async (m: ArgExistClienteFisico) => {
  const response = await mediatorRepositoryClienteFisico?.exist?.exist(m);

  if (typeof response == 'undefined') {
    return m;
  } else {
    throw new Error(feedbacks.alreadyExists);
    // return new Error(feedbacks.alreadyExists);
  }

};

// este vai usar o repo.exist

export { featExistClienteFisico };
