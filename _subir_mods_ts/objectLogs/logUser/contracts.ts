import { IObjectDateLogMD } from "../../../global/imports/mod_deps.ts";

export type LogPersonModel = ArgsLogPerson;

export interface ArgsLogPerson {
  atividade: string;
  author?: string;
  data?: IObjectDateLogMD;
  statusModificacoes?: StatusModificacoes;
}

export interface StatusModificacoes {
  anterior: any;
  alteradoPara: any;
}

export interface LogUserType {
  items?: LogPersonModel[];
  create: (props: LogPersonModel) => LogPersonModel | boolean;
  list: () => LogPersonModel[];
}
