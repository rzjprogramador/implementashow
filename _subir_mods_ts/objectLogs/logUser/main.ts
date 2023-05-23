// deno-lint-ignore-file no-explicit-any
import { objectDateLogMD } from "../../../global/imports/mod_deps.ts";
import { ArgsLogPerson, ILogPerson } from "./contracts.ts";

type MakeLogUserFN = (a: ArgsLogPerson)=> ILogPerson

export const makeLogUser: MakeLogUserFN = (a) => {
  const inputLog: ILogPerson = {
    atividade: a.atividade,
    author: a. author,
    data: objectDateLogMD(),
    statusModificacoes: {
      anterior: a.statusModificacoes?.anterior,
      alteradoPara: a.statusModificacoes?.alteradoPara
    }
  };
  // const createLog = repositoryInUselogUser.production.create(inputLog);
  return inputLog;
};
