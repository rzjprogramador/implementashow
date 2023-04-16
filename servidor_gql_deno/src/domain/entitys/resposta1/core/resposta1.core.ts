// deno-lint-ignore-file no-unused-vars
import { prepareCreateResposta1 } from "../editables/prepare.resposta1.ts";
import {
  ArgsResposta1,
  TypeResposta1,
} from "../editables/resposta1.contracts.ts";
import { repositoryResposta1Memory } from "../repository/repository.memory.resposta1.ts";

const argsTypeResposta1 = (d: ArgsResposta1): ArgsResposta1 => {
  // criar factory do objeto
  return d;
};

// prepare

const saveCreateResposta1 = (d: TypeResposta1): TypeResposta1 => {
  const prepared = d;
  const saved = prepareCreateResposta1(prepared);
  return repositoryResposta1Memory.create(saved);
};

//
const coreCreateResposta1 = (d: ArgsResposta1): TypeResposta1 =>
  prepareCreateResposta1(d);

export { coreCreateResposta1 };
export { argsTypeResposta1, saveCreateResposta1 };
