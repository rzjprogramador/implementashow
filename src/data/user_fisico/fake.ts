import { UserFisicoArgs } from "../../domain/entitys/user_fisico/contracts.ts";

export const fakeListUserFisicoArgsOK: UserFisicoArgs[] = [
  {
    primeiroNome: "onename",
    sobrenome: "any sobrenome one",
    email: "any_one-email@gmail.com",
    anoNascimento: 1977,
    tipoUser: "Fisico",
    endereco: {
      cep: "08070140",
      longadouro: "any rua one",
      numero: "1",
      complemento: "any complemento",
      cidade: {
        nome: "Sao Paulo",
        uf: "SP",
      },
    },
  },
  {
    primeiroNome: "twoname",
    sobrenome: "any sobrenome two",
    email: "any_two-email@gmail.com",
    anoNascimento: 1977,
    tipoUser: "Fisico",
    endereco: {
      cep: "08070140",
      longadouro: "any rua two",
      numero: "1",
      complemento: "any complemento",
      cidade: {
        nome: "Sao Paulo",
        uf: "SP",
      },
    },
  },
];

export const fakeListUserFisicoArgsFAIL: UserFisicoArgs[] = [
  {
    primeiroNome: "o",
    sobrenome: "any sobrenome one",
    email: "any_one-email@gmail.com",
    anoNascimento: 1977,
    tipoUser: "Fisico",
    endereco: {
      cep: "08070140",
      longadouro: "any rua one",
      numero: "1",
      complemento: "any complemento",
      cidade: {
        nome: "Sao Paulo",
        uf: "SP",
      },
    },
  },
  {
    primeiroNome: "aaaaaaaaaabbbbbbbbbb21",
    sobrenome: "any sobrenome two",
    email: "any_two-email@gmail.com",
    anoNascimento: 1977,
    tipoUser: "Fisico",
    endereco: {
      cep: "08070140",
      longadouro: "any rua two",
      numero: "1",
      complemento: "any complemento",
      cidade: {
        nome: "Sao Paulo",
        uf: "SP",
      },
    },
  },
];
