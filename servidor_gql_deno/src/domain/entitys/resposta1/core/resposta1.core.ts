// deno-lint-ignore-file no-unused-vars
import { ArgsResposta1, TypeResposta1 } from "../editables/resposta1.contracts.ts";
import { repositoryResposta1Memory } from "../repository/repository.memory.resposta1.ts";

const argsTypeResposta1 = (d: ArgsResposta1): ArgsResposta1 => {
  // criar factory do objeto
  return d;
};

const prepareCreateResposta1 = (d: ArgsResposta1): TypeResposta1 => {
  const args = argsTypeResposta1(d);
  const newType = { args: args };
  return newType;
};

const saveCreateResposta1 = (d: TypeResposta1): TypeResposta1 => {
  const prepared = d.args;
  const saved = prepareCreateResposta1(prepared);
  return repositoryResposta1Memory.create(saved);
};

//
const coreCreateResposta1 = (d: ArgsResposta1): TypeResposta1 =>
  prepareCreateResposta1(d);

export { coreCreateResposta1 };
export { prepareCreateResposta1, saveCreateResposta1 };
