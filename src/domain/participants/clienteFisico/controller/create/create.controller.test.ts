// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import {
  CreateClienteFisico,
  type ArgsClienteFisico,
} from "@clienteFisico";


const sut = CreateClienteFisico
const inputOK: ArgsClienteFisico = {
  primeiroNome: "any",
  sobrenome: "one sobrenome",
  email: "one.email@gmail.com",
  dataNascimento: {
    dia: 1,
    mes: 1,
    ano: 1970,
  },
  tipoUser: "Fisico",
  endereco: {
    cep: "08070140",
    longadouro: "one rua 1",
    numero: "1",
    complemento: "any complemento",
    cidade: {
      nome: "Sao Paulo",
      uf: "SP",
    },
  },
}

const inputFAIL: ArgsClienteFisico = {
  primeiroNome: "a",
  sobrenome: "one sobrenome",
  email: "one.email@gmail.com",
  dataNascimento: {
    dia: 1,
    mes: 1,
    ano: 1970,
  },
  tipoUser: "Fisico",
  endereco: {
    cep: "08070140",
    longadouro: "one rua 1",
    numero: "1",
    complemento: "any complemento",
    cidade: {
      nome: "Sao Paulo",
      uf: "SP",
    },
  },
}

Deno.test({
  name: "deve retornar ->  && .",
  only: false,
  async fn() {
    // TODO : FAZER O TEST CONTROLLER - E ANTES PERSISTIR A FACTORY CRIADA DEPOIS DE VALIDAR TODOS CAMPOS
    // const action = await sut.execute()

    expect(true);
  },

});


/* TESTER_CONSOLE ************************************* */

async function tester_OK() {
  const res = await sut.execute(inputOK);
  console.log(res)
}
// tester_OK ();

async function tester_FAIL() {
  const res = await sut.execute(inputFAIL);
  console.log(res)
}
// tester_FAIL ();

export default 1;