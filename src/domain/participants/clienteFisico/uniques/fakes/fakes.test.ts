// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import {
  fakerIDClienteFisico,
  fakesArgsClienteFisico,
} from "@clienteFisico";

const sut = fakesArgsClienteFisico
const sutID = fakerIDClienteFisico;

Deno.test("[ OK.one ]deve retornar as props com os valores  corretos utilizados no literal", () => {
  expect(sut.OK.one.primeiroNome).toEqual("onename");
  expect(sut.OK.one.sobrenome).toEqual("one sobrenome");
  expect(sut.OK.one.email).toEqual("one.email@gmail.com");
  expect(sut.OK.one.dataNascimento).toEqual({
    dia: 1,
    mes: 1,
    ano: 1970,
  });
  expect(sut.OK.one.tipoUser).toEqual("Fisico");
  expect(sut.OK.one.endereco).toEqual({
    cep: "08070140",
    longadouro: "one rua 1",
    numero: "1",
    complemento: "any complemento",
    cidade: {
      nome: "Sao Paulo",
      uf: "SP",
    },
  });
});

Deno.test("[ OK.two ]deve retornar as props com os valores  corretos utilizados no literal", () => {
  expect(sut.OK.two.primeiroNome).toEqual("twoname");
  expect(sut.OK.two.sobrenome).toEqual("two sobrenome");
  expect(sut.OK.two.email).toEqual("two.email@gmail.com");
  expect(sut.OK.two.dataNascimento).toEqual({
    dia: 1,
    mes: 1,
    ano: 1977,
  });
  expect(sut.OK.two.tipoUser).toEqual("Fisico");
  expect(sut.OK.two.endereco).toEqual({
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

Deno.test("[ FAIL.one ]deve retornar as props com os valores  corretos utilizados no literal", () => {
  expect(sut.FAIL.one.primeiroNome).toEqual("o");
  expect(sut.FAIL.one.sobrenome).toEqual("FAIL.one sobrenome");
  expect(sut.FAIL.one.email).toEqual("one.email@gmail.com");
  expect(sut.FAIL.one.dataNascimento).toEqual({
    dia: 22,
    mes: 1,
    ano: 1977,
  });
  expect(sut.FAIL.one.tipoUser).toEqual("Fisico");
  expect(sut.FAIL.one.endereco).toEqual({
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

Deno.test("[ FAIL.two ] deve retornar as props com os valores  corretos utilizados no literal", () => {
  expect(sut.FAIL.two.primeiroNome).toEqual("aaaaaaaaaabbbbbbbbbb21");
  expect(sut.FAIL.two.sobrenome).toEqual("any sobrenome two");
  expect(sut.FAIL.two.email).toEqual("any_two-email@gmail.com");
  expect(sut.FAIL.two.dataNascimento).toEqual({
    dia: 1,
    mes: 1,
    ano: 1970,
  });
  expect(sut.FAIL.two.tipoUser).toEqual("Fisico");
  expect(sut.FAIL.two.endereco).toEqual({
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
