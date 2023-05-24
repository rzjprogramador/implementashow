import { IObjectDateLog } from "../../dateObject/main.ts";

export type LogPersonModel = ArgsLogPerson;

export interface ArgsLogPerson {
  atividade: string;
  author?: string;
  data?: IObjectDateLog;
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
