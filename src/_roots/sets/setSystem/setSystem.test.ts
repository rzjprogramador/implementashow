
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { setSystem } from '@globalEntitys'


const sut = setSystem

Deno.test("[ Strings ] deve retornar os valores definidos em setSystem", () => {
  expect(sut.Strings.one).toBe('1');
  expect(sut.Strings.two).toBe('2');
});

Deno.test("[ Numbers ] deve retornar os valores definidos em setSystem", () => {
  expect(sut.Numbers.one).toBe(1);
  expect(sut.Numbers.two).toBe(2);
});

export default 1;