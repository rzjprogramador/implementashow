import { IObjectDateLogMD } from "../../../global/imports/mod_deps.ts";

export type ILogPerson = ArgsLogPerson

export interface ArgsLogPerson {
  atividade: string;
  author?: string;
  data?: IObjectDateLogMD;
  statusModificacoes?: StatusModificacoes
}

export interface StatusModificacoes {
  anterior: any
  alteradoPara: any
}

export interface LogUserType {
  items?: ILogPerson[];
  create: (props: ILogPerson) => ILogPerson | boolean;
  list: () => ILogPerson[];
}
