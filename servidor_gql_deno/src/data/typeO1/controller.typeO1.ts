import { ioCreateTypeO1 } from "../../domain/entitys/typeO1/core/d.io.typeO1.ts";
import { ArgsResposta1, ControllerTypeResposta1 } from "../../domain/entitys/typeO1/editables/contract/contracts.typeO1.ts";

const createResposta1Controller = (d: ArgsResposta1): ControllerTypeResposta1 =>
  ioCreateTypeO1(d);

export { createResposta1Controller };
