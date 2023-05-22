import { ILogPerson } from "../../../domain/entitys/logs/log_person/index.ts";

export interface LogUserType {
  items?: ILogPerson[];
  create: (props: ILogPerson) => boolean;
  list: () => ILogPerson[];
}

export const LogUser: LogUserType = {
  items: [],

  create(props: ILogPerson) {
    if(props) {
      this?.items?.push(props)!;
      return true;
    } else {
      return false
    }

  },

  list() {
    return this?.items!;
  },
};
