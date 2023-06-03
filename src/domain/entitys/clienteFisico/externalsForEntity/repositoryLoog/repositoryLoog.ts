import { LoggPersonModel, LoggUserType } from "../../../../../../../rzModulesTS/_subir_mods_ts/LoggUser/index.ts"

const logUserRepositoryProduction: LoggUserType = {
  items: [],

  create(props: LoggPersonModel) {
    if (props) {
      this?.items?.push(props)!
      return props
    } else {
      return false
    }
  },

  list() {
    return this?.items!
  },
}

export { logUserRepositoryProduction }
