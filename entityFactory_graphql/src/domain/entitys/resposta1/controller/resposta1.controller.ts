import {
  ArgsResposta1,
  ControllerTypeResposta1,
} from "../core/resposta1.contracts.ts";
import { coreCreateResposta1 } from "../core/resposta1.core.ts";

const createResposta1Controller = (d: ArgsResposta1): ControllerTypeResposta1 =>
  coreCreateResposta1(d);

export { createResposta1Controller };
