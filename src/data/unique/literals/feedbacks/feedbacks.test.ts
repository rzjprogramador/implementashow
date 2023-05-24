// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { feedbacks } from "./feedbacks.ts";

const sut = feedbacks;

Deno.test("deve retornar os feedbacks corretamente", () => {
  expect(sut.createOk).toBe("criado com sucesso");
  expect(sut.createUserFisicoOk()).toBe("Usuario Fisico criado com sucesso");
});
