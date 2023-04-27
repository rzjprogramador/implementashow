// deno-lint-ignore-file valid-typeof
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { validPrimeiroNome } from "./primeiroNome.ts";
import { messagesError } from "../../../githubModulesMessages/messagesFeedback.ts";

const sut_message_field_primeiroNome_erro_length =
  messagesError.primeiroNome_TamanhoCaracteresPadrao;

type SutArgs = string;
const makeSut = (v: SutArgs) => {
  return {
    sut: validPrimeiroNome(v),
  };
};

Deno.test("[ valid field primeiroNome ] ... ", () => {
  const argsErr = "ab";

  const { sut } = makeSut(argsErr);
  const actual = sut;
  const result = new Error(sut_message_field_primeiroNome_erro_length);
  // esta totalmente ligado ao moduloMessagePai : que vira do github

  // console.log("RESULTADO ERRO.LENGTH EM PRIMEIRO NOME", result);

  expect(actual).toEqual(result);
});
