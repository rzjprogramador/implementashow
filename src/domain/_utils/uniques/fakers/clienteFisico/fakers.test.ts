// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import {
  fakerListClienteFisicoArgsFAIL,
  fakerListClienteFisicoArgsOK,
  fakerIDClienteFisico,
} from "@clienteFisico";

const makeSut = () => {
  return {
    sutOk: fakerListClienteFisicoArgsOK,
    sutFAIL: fakerListClienteFisicoArgsFAIL,
  };
};

const sutID = fakerIDClienteFisico;

Deno.test("[ literalOK_one ]deve retornar as props com os valores  corretos utilizados no literal", () => {
  const { sutOk } = makeSut();
  expect(sutOk[0].primeiroNome).toEqual("onename");
  expect(sutOk[0].sobrenome).toEqual("any sobrenome one");
  expect(sutOk[0].email).toEqual("any_one-email@gmail.com");
  expect(sutOk[0].dataNascimento).toEqual({
    dia: 1,
    mes: 1,
    ano: 1970,
  });
  expect(sutOk[0].tipoUser).toEqual("Fisico");
  expect(sutOk[0].endereco).toEqual({
    cep: "08070140",
    longadouro: "any rua one",
    numero: "1",
    complemento: "any complemento",
    cidade: {
      nome: "Sao Paulo",
      uf: "SP",
    },
  });
});

Deno.test("[ literalOK_two ]deve retornar as props com os valores  corretos utilizados no literal", () => {
  const { sutOk } = makeSut();
  expect(sutOk[1].primeiroNome).toEqual("twoname");
  expect(sutOk[1].sobrenome).toEqual("any sobrenome two");
  expect(sutOk[1].email).toEqual("any_two-email@gmail.com");
  expect(sutOk[1].dataNascimento).toEqual({
    dia: 1,
    mes: 1,
    ano: 1977,
  });
  expect(sutOk[1].tipoUser).toEqual("Fisico");
  expect(sutOk[1].endereco).toEqual({
    cep: "08070140",
    longadouro: "any rua two",
    numero: "1",
    complemento: "any complemento",
    cidade: {
      nome: "Sao Paulo",
      uf: "SP",
    },
  });
});

Deno.test("[ literalFAIL_one ]deve retornar as props com os valores  corretos utilizados no literal", () => {
  const { sutFAIL } = makeSut();
  expect(sutFAIL[0].primeiroNome).toEqual("o");
  expect(sutFAIL[0].sobrenome).toEqual("any sobrenome one");
  expect(sutFAIL[0].email).toEqual("any_one-email@gmail.com");
  expect(sutFAIL[0].dataNascimento).toEqual({
    dia: 22,
    mes: 1,
    ano: 1977,
  });
  expect(sutFAIL[0].tipoUser).toEqual("Fisico");
  expect(sutFAIL[0].endereco).toEqual({
    cep: "08070140",
    longadouro: "any rua one",
    numero: "1",
    complemento: "any complemento",
    cidade: {
      nome: "Sao Paulo",
      uf: "SP",
    },
  });
});

Deno.test("[ literalFAIL_two ]deve retornar as props com os valores  corretos utilizados no literal", () => {
  const { sutFAIL } = makeSut();
  expect(sutFAIL[1].primeiroNome).toEqual("aaaaaaaaaabbbbbbbbbb21");
  expect(sutFAIL[1].sobrenome).toEqual("any sobrenome two");
  expect(sutFAIL[1].email).toEqual("any_two-email@gmail.com");
  expect(sutFAIL[1].dataNascimento).toEqual({
    dia: 1,
    mes: 1,
    ano: 1970,
  });
  expect(sutFAIL[1].tipoUser).toEqual("Fisico");
  expect(sutFAIL[1].endereco).toEqual({
    cep: "08070140",
    longadouro: "any rua two",
    numero: "1",
    complemento: "any complemento",
    cidade: {
      nome: "Sao Paulo",
      uf: "SP",
    },
  });
});

Deno.test("deve retornar os valores corretos dos literalID ClienteFisico", () => {
  expect(sutID.one).toEqual("1");
  expect(sutID.two).toEqual("2");
});

/* TESTER_CONSOLE ************************************* */

export default 1;
