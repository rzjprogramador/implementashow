import { argsTypeResposta1 } from "../../a_type/a.args.typeO1.ts";
import { ArgsResposta1, TypeResposta1 } from "../contract/contracts.typeO1.ts";

const prepareCreateResposta1 = (d: ArgsResposta1): TypeResposta1 => {
  const args = argsTypeResposta1(d);
  const newType = { ...args };
  return newType;
};

export { prepareCreateResposta1 };
