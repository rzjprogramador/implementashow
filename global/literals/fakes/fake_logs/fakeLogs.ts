import { ArgsLogPerson } from "../../../../_subir_mods_ts/objectLogs/logUser/contracts.ts";
import { objectDateLogMD } from "../../../imports/mod_deps.ts";

export const fakeLogUserOK: ArgsLogPerson = {
  atividade: "atividade1",
  author: "1",
  data: objectDateLogMD(),
  statusModificacoes: { anterior: "foo", alteradoPara: "bar" },
};
