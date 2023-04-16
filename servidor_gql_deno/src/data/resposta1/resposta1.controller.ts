import { coreCreateResposta1 } from "../../domain/entitys/resposta1/core/resposta1.core.ts";
import { ArgsResposta1, ControllerTypeResposta1 } from "../../domain/entitys/resposta1/editables/contract/contracts.resposta1.ts";


const createResposta1Controller = (d: ArgsResposta1): ControllerTypeResposta1 =>
  coreCreateResposta1(d);

export { createResposta1Controller };

