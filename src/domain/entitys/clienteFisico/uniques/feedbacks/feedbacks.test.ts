import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { feedbackClienteFisico } from "../../deps.deps.ts";

const sut = feedbackClienteFisico;

Deno.test("deve retornar os feedbacks corretamente", () => {
  expect(sut.createClienteFisicoOk()).toBe("Usuario Fisico criado com sucesso");
});
