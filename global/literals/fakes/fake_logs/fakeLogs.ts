import { objectDateLogMD } from "../../../imports/mod_deps.ts";

export const fakeLogUserOK = {
  atividade: "atividade1",
  author: "1",
  data: objectDateLogMD(),
  statusModificacoes: { anterior: "foo", alteradoPara: "bar" },
};
