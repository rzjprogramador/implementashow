import { feedbacks } from "../../../../../../../app/dataApp/literals/feedbacks/feedbacks.ts";
import { mediatorRepositoryClienteFisico } from "../../../../../../../data/unique/clienteFisico/mediator/mediator.ts";
import { ArgExistClienteFisico } from "../../../../contracts.ts";

const featExistClienteFisico = async (m: ArgExistClienteFisico) => {
  const response = await mediatorRepositoryClienteFisico?.exist?.exist(m);
  if (!response) {
    return new Error(feedbacks.alreadyExists);
  }
  return response;
};

export { featExistClienteFisico };
