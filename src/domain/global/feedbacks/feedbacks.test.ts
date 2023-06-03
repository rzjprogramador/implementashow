import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { feedbacksGlobal } from "../globalDeps.deps.ts";

const sut = feedbacksGlobal;

Deno.test("deve retornar os feedbacks corretamente", () => {
  expect(sut.createOk).toBe("criado com sucesso");
  expect(sut.alreadyExists).toBe(`Ops... ja cadastrado!`);
});
