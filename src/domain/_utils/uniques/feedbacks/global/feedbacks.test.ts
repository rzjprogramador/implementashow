import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { feedbackGlobal } from "./feedbacks.ts";

const sut = feedbackGlobal;

Deno.test("deve retornar os feedbacks corretamente", () => {
  expect(sut.createOk).toBe("criado com sucesso");
  expect(sut.alreadyExists).toBe(`Ops... ja cadastrado!`);
});
