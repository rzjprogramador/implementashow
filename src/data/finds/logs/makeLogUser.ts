import { modObjectDateLog } from "../../../../global/imports/mod_deps.ts";
import { LogUser } from "./index.ts";

export const makeLogUser = (atividade: string, idAuthor: string) => {
  const inputLog = {
    atividade: atividade,
    author: idAuthor,
    data: modObjectDateLog(),
  };
  const createLog = LogUser.create(inputLog);
  return !!createLog;
};
