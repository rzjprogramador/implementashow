import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { Log } from "@replicasRemote";
import { pipeCaseCreateClienteFisico, fakesArgsClienteFisico, ArgsClienteFisico } from "@clienteFisico";
import { feedbackFailLength, setMinStringAdm } from "../../../../../_roots/deps/replicas.local.deps.ts";

const sut = pipeCaseCreateClienteFisico
const inputSut = fakesArgsClienteFisico

const inFAIL = inputSut.FAIL;

const testerPrimeiroNome = async (target: ArgsClienteFisico) => {
  try {
    return await sut(target)
  }
  catch (err: any) {
    return err.message
  }
}

Deno.test({
  name: "deve retornar estourar excessao de novo erro ao receber o campoPrimeiroNome com o minimo da capacidade de string",
  only: false,
  async fn() {

    expect(await testerPrimeiroNome(inFAIL.one)).toEqual(`${feedbackFailLength} ${setMinStringAdm}`);
  },

});


/* TESTER_CONSOLE ************************************* */

sut(inFAIL.one).catch((err) => Log(err.message)); // fail : primeiroNome

export default 1;
