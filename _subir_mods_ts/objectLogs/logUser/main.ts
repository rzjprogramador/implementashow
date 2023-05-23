import { objectDateLogMD } from "../../../global/imports/mod_deps.ts";
import { repositoryInUselogUser } from "./controller.ts";

export const makeLogUser = (atividade: string, idAuthor: string) => {
  const inputLog = {
    atividade: atividade,
    author: idAuthor,
    data: objectDateLogMD(),
  };
  const createLog = repositoryInUselogUser.production.create(inputLog);
  return !!createLog;
};
