// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { IObjectDateLog } from "./main.ts";
import { modObjectDateCurrent } from "../../global/imports/mod_deps.ts";

const objectDateMock = () => {
  const hoje = modObjectDateCurrent.dateNow;

  const log: IObjectDateLog = {
    dia: '22',
    mes: '05',
    ano: '2023',
    horario: `11:01`,
  };
  return log;
};

const sut = objectDateMock

Deno.test("deve retornar objectDateMock", () => {
  const actual = sut();
  const assertion = {
    dia: '22',
    mes: '05',
    ano: '2023',
    horario: `11:01`,
  }

  expect(actual).toEqual(assertion)
});

/* TESTER_CONSOLE ************************************* */

function show_objectDate() {
  const actual = sut();
  console.log(actual);
}
show_objectDate();

export default 1;
