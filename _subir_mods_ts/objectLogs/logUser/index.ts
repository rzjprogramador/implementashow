import { IObjectDateLog } from "../../object_date_log/main.ts";

export interface ILogPerson {
  atividade: string;
  author?: string;
  data?: IObjectDateLog;
}

export interface LogUserType {
  items?: ILogPerson[];
  create: (props: ILogPerson) => boolean;
  list: () => ILogPerson[];
}

export const LogUser: LogUserType = {
  items: [],

  create(props: ILogPerson) {
    if (props) {
      this?.items?.push(props)!;
      return true;
    } else {
      return false;
    }
  },

  list() {
    return this?.items!;
  },
};
