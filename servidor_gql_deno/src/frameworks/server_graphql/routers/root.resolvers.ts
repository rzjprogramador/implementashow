import { showTypeObj1, showTypePrimitivo1 } from "../../../data/types/controller.types.ts";

const resolversRoot = {
  Query: {
    respostaTypePrimitivo1: () => showTypePrimitivo1(),
    respostaTypeObj1: () => showTypeObj1(),
  },
};

export { resolversRoot };
