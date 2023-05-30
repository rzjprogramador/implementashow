import { ClienteFisicoArgs } from "../../../../../../../../src/data/unique/clienteFisico/index.ts";
import { membersClienteFisico } from "./members.ts";

const clienteFisicoFactory = (a: ClienteFisicoArgs) => {
  // a.primeiroNome = a.primeiroNome ?? 'foo' // aqui caso precise dar valor default a campo.
  const entity = Object.create(membersClienteFisico);
  const merge = Object.assign(entity, a);
  return merge;
};

// make desta factory : para ser utilizado na app
const newClienteFisicoFactory = (a: ClienteFisicoArgs) => {
  return clienteFisicoFactory(a);
};

export { newClienteFisicoFactory };
