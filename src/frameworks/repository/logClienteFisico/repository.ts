import { LogPersonModel } from "../../../../_subir_mods_ts/objectLogs/logUser/contracts.ts";
import { LogUserType } from "../../../../_subir_mods_ts/objectLogs/logUser/contracts.ts";

export const logUserRepositoryProduction: LogUserType = {
  items: [],

  create(props: LogPersonModel) {
    if (props) {
      this?.items?.push(props)!;
      return props;
    } else {
      return false;
    }
  },

  list() {
    return this?.items!;
  },
};
