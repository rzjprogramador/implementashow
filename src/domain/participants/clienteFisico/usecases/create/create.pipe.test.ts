import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { Log } from "@replicasRemote";
import { pipeCaseCreateClienteFisico, fakesArgsClienteFisico } from "@clienteFisico";


const sut = pipeCaseCreateClienteFisico
const inputSut = fakesArgsClienteFisico

const inFAIL = inputSut.FAIL;

Deno.test({
  name: "deve retornar falha nos objectValues usados na listValidades em { validateFieldsArgsClienteFisico() }",
  only: false,
  async fn() {

    // const where = await sut(inFAIL.one);
    // Log('>>>>>>>', where)
    // expect(await where).toThrow(`Ops o total de letras não pode ser menor que 2`);
  },

});


/* TESTER_CONSOLE ************************************* */

async function tester_FAIL_PrimeiroNome() {
  try {
    await sut(inFAIL.one)
  }
  catch (err: any) {
    console.log(err.message)
    // return err.message
  }

}
tester_FAIL_PrimeiroNome();

export default 1;
