import { objectDateLog } from "../../dateObject/main.ts";
import { ArgsLogPerson, LogPersonModel } from "./contracts.ts";

type MakeLogUserFN = (a: ArgsLogPerson) => LogPersonModel;

export const createLogUser: MakeLogUserFN = (a) => {
  const inputLog: LogPersonModel = {
    atividade: a.atividade,
    author: a.author,
    data: objectDateLog(),
    statusModificacoes: {
      anterior: a.statusModificacoes?.anterior,
      alteradoPara: a.statusModificacoes?.alteradoPara,
    },
  };
  // const createLog = repositoryInUselogUser.production.create(inputLog);
  return inputLog;
};

// todo: mudar log para logg