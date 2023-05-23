import { ILogPerson } from "../../../../_subir_mods_ts/objectLogs/logUser/contracts.ts";
import { LogUserType } from "../../../../_subir_mods_ts/objectLogs/logUser/contracts.ts";

export const logUserRepositoryProduction: LogUserType = {
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
