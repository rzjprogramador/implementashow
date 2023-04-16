// deno-lint-ignore-file no-unused-vars
import { ArgsResposta1, TypeResposta1 } from "../editables/contract/contracts.resposta1.ts";
import { prepareCreateResposta1 } from "../editables/prepare/prepare.resposta1.ts";
import { repositoryResposta1Tester } from "../repository/repository.resposta1.testers.ts";

const argsTypeResposta1 = (d: ArgsResposta1): ArgsResposta1 => {
  // criar factory do objeto
  return d;
};

// prepare

const saveCreateResposta1 = (d: TypeResposta1): TypeResposta1 => {
  const prepared = d;
  const saved = prepareCreateResposta1(prepared);
  return repositoryResposta1Tester.create(saved);
};

//
const coreCreateResposta1 = (d: ArgsResposta1): TypeResposta1 =>
  prepareCreateResposta1(d);

export { coreCreateResposta1 };
export { argsTypeResposta1, saveCreateResposta1 };
