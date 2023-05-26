// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { objectDateCurrent } from "./main.ts";

// todo: arrumar este test esta retornando NaN

const sut = objectDateCurrent;

Deno.test("deve retornar data agora", () => {
  const actual = sut.dateNow;

  expect(actual).not.toBeFalsy();
});

/* TESTER_CONSOLE ************************************* */

function show_objectDateCurrent() {
  console.log(sut.currentYear());
  // sut.currentYear().then((d) => console.log(d));
  // todo: arrumar este test esta retornando NaN ao tentar ver o ano atual
}
show_objectDateCurrent();

export default 1;
