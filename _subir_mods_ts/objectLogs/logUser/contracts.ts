import { IObjectDateLogMD } from "../../../global/imports/mod_deps.ts";

export interface ILogPerson {
  atividade: string;
  author?: string;
  data?: IObjectDateLogMD;
}

export interface LogUserType {
  items?: ILogPerson[];
  create: (props: ILogPerson) => boolean;
  list: () => ILogPerson[];
}
