// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { CreateClienteFisico } from "./create.controller.ts";


const sut = CreateClienteFisico

Deno.test({
  name: "deve retornar ->  && .",
  only: false,
  async fn() {
    const action = await sut.execute()

    expect(action).toEqual('oi1');
  },

});


/* TESTER_CONSOLE ************************************* */

// async function tester_() {
//   const res = await sut(inputSut);
//   res.then(d => Log(d))
//   // res.then(d => Log(d))
// }
// tester_ ();

export default 1;