// deno-lint-ignore-file no-unused-vars
import {
  ArgsTypeO1,
  TypeO1Model,
} from "../editables/contract/contracts.typeO1.ts";
import { prepareCreateTypeO1 } from "../editables/prepare/b.prepare.typeO1.ts";

const ioCreateTypeO1 = (d: ArgsTypeO1): TypeO1Model => prepareCreateTypeO1(d);

export { ioCreateTypeO1 };
