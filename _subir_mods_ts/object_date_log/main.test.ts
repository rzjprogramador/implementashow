// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { objectDateLog } from "./main.ts";

const sut = objectDateLog;

Deno.test("deve retornar os dados do [ objectDateLog ] iguais ao date real do sistema no momento.", () => {
  const hoje = new Date();

  const actual = sut();

  const assertion = {
    dia: hoje.getDate().toString().padStart(2, "0"),
    mes: String(hoje.getMonth() + 1).padStart(2, "0"),
    ano: String(hoje.getFullYear()),
    horario: String(`${hoje.getHours()}:${hoje.getMinutes()}`),
  };

  expect(actual).toEqual(assertion);
});

/* TESTER_CONSOLE ************************************* */

function show_objectDate() {
  const actual = sut();
  console.log(actual);
}
show_objectDate();

export default 1;
