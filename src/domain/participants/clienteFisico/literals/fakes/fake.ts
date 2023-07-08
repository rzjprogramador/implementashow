import { ArgsClienteFisico } from "@clienteFisico"

const fakeBaseOkArgsClienteFisicoONE: ArgsClienteFisico = {
  primeiroNome: "any",
  sobrenome: "any",
  email: "any@testmail.com",
  dataNascimento: {
    dia: 10,
    mes: 10,
    ano: 1970,
  },
  tipoUser: "Fisico",
  endereco: {
    cep: "08070140",
    longadouro: "any",
    numero: "10",
    complemento: "any",
    cidade: {
      nome_cidade: "Sao Paulo",
      uf: "SP",
    },
  },
}
const fakeBaseOkArgsClienteFisicoTWO: ArgsClienteFisico = {
  primeiroNome: "any",
  sobrenome: "any",
  email: "any@testmail.com",
  dataNascimento: {
    dia: 10,
    mes: 10,
    ano: 1970,
  },
  tipoUser: "Fisico",
  endereco: {
    cep: "08070140",
    longadouro: "any",
    numero: "10",
    complemento: "any",
    cidade: {
      nome_cidade: "Sao Paulo",
      uf: "SP",
    },
  },
}

export { fakeBaseOkArgsClienteFisicoONE, fakeBaseOkArgsClienteFisicoTWO }