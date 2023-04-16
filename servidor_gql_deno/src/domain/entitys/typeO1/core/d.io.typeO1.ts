// deno-lint-ignore-file no-unused-vars

import { ArgsResposta1, TypeResposta1 } from "../editables/contract/contracts.typeO1.ts";
import { prepareCreateResposta1 } from "../editables/prepare/b.prepare.typeO1.ts";

const ioCreateTypeO1 = (d: ArgsResposta1): TypeResposta1 =>
  prepareCreateResposta1(d);

export { ioCreateTypeO1 };
