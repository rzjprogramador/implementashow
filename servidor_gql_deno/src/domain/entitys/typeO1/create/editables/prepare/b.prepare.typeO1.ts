import { createArgsTypeO1 } from "../../a_type/a.args.typeO1.ts";
import { ArgsTypeO1, TypeO1Model } from "../contract/contracts.typeO1.ts";

const prepareCreateTypeO1 = (d: ArgsTypeO1): TypeO1Model => {
  const args = createArgsTypeO1(d);
  const newType = { ...args };
  return newType;
};

export { prepareCreateTypeO1 };
