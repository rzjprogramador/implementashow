// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { userArgsFake } from "./fake.ts";
import { UserArgs } from "../../contracts/user.ts";

const sut: UserArgs = userArgsFake;

Deno.test("[ Fail >> ... ] deve retornar ...", () => {
  const actual = sut;
  const resultExpected: any = {
    primeiroNome: "reinaldo",
    sobrenome: "anySobrenome anySobrenomeFinal",
    anoNascimento: 1977,
    email: "any_email@gmail.com",
  };
  // Log("LOG {{ ACTUAL }} >>>  ", actual);

  expect(actual).toEqual(resultExpected);
});

/* TESTER_CONSOLE ************************************* */

function showSut() {
  console.log(sut);
}
showSut();

export default 1;
