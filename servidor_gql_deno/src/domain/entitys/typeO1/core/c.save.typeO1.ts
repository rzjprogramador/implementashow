// deno-lint-ignore-file no-unused-vars

import { TypeResposta1 } from "../editables/contract/contracts.typeO1.ts";
import { prepareCreateResposta1 } from "../editables/prepare/b.prepare.typeO1.ts";
import { repositoryResposta1Tester } from "../repository/repository.tester.typeO1.ts";

const saveCreateResposta1 = (d: TypeResposta1): TypeResposta1 => {
  const prepared = d;
  const saved = prepareCreateResposta1(prepared);
  return repositoryResposta1Tester.create(saved);
};
export { saveCreateResposta1 };
