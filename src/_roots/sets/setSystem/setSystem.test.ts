
// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { setSystem } from '@replicasLocalGlobal'


const sut = setSystem

Deno.test("[ Strings ] deve retornar os valores definidos em setSystem", () => {
  expect(setSystem.Strings.one).toBe('1');
  expect(setSystem.Strings.two).toBe('2');
});

Deno.test("[ Numbers ] deve retornar os valores definidos em setSystem", () => {
  expect(setSystem.Numbers.one).toBe(1);
  expect(setSystem.Numbers.two).toBe(2);
});

export default 1;