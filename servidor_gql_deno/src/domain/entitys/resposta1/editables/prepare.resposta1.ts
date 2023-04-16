import { argsTypeResposta1 } from "../core/resposta1.core.ts";
import { ArgsResposta1, TypeResposta1 } from "./resposta1.contracts.ts";

const prepareCreateResposta1 = (d: ArgsResposta1): TypeResposta1 => {
  const args = argsTypeResposta1(d);
  const newType = { ...args };
  return newType;
};

export { prepareCreateResposta1 };
