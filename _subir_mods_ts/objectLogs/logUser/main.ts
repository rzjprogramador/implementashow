// deno-lint-ignore-file no-explicit-any
import { objectDateLogMD } from "../../../global/imports/mod_deps.ts";
import { ArgsLogPerson, LogPersonModel } from "./contracts.ts";

type MakeLogUserFN = (a: ArgsLogPerson) => LogPersonModel;

export const makeLogUser: MakeLogUserFN = (a) => {
  const inputLog: LogPersonModel = {
    atividade: a.atividade,
    author: a.author,
    data: objectDateLogMD(),
    statusModificacoes: {
      anterior: a.statusModificacoes?.anterior,
      alteradoPara: a.statusModificacoes?.alteradoPara,
    },
  };
  // const createLog = repositoryInUselogUser.production.create(inputLog);
  return inputLog;
};
