import { ioCreateTypeO1 } from "../../domain/entitys/typeO1/create/core/d.io.typeO1.ts";
import { ArgsTypeO1, TypeO1Controller } from "../../domain/entitys/typeO1/create/editables/contract/contracts.typeO1.ts";

const createResposta1Controller = (d: ArgsTypeO1): TypeO1Controller =>
  ioCreateTypeO1(d);

export { createResposta1Controller };
