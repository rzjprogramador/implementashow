import { IObjectDateLog } from "../../../../../_subir_mods_ts/object_date_log/main.ts";
import { modObjectDateLog } from "../../../../../global/imports/mod_deps.ts";

export interface ILogPerson {
  atividade: string;
  author?: string;
  data?: IObjectDateLog;
}

export const logPerson = (l: ILogPerson, author: string) => {
  const log: ILogPerson = {
    atividade: l.atividade,
    author: author,
    data: modObjectDateLog(),
  };
  return log;
};
