import { createResposta1Controller } from "../../../data/controller_resposta1/resposta1.controller.ts";

const resolversRoot = {
  Query: {
    resposta1: () =>
      createResposta1Controller({ texto: "Args como Resposta1 -- 02" }),
  },
};

export { resolversRoot };
