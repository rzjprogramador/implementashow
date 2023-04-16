import { createResposta1Controller } from "../../domain/entitys/resposta1/controller/resposta1.controller.ts";
import { ArgsResposta1 } from "../../domain/entitys/resposta1/core/resposta1.contracts.ts";

const resolversRoot = {
  Query: {
    resposta1: () =>
      createResposta1Controller({ texto: "Args como Resposta1 -- 02" }),
  },
};

export { resolversRoot };
