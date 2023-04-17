import { createResposta1Controller } from "../../../data/typeO1/controller.typeO1.ts";

const resolversRoot = {
  Query: {
    resposta1: () =>
      createResposta1Controller({ texto: "Args como Resposta1 -- 02" }),
  },
};

export { resolversRoot };
