import { ClienteFisicoArgs } from "@clienteFisicoContracts";

type FakerIDClienteFisico = { one: string; two: string };

export const fakerIDClienteFisico: FakerIDClienteFisico = {
  one: "1",
  two: "2",
};

export const fakerListClienteFisicoArgsOK: ClienteFisicoArgs[] = [
  {
    primeiroNome: "onename",
    sobrenome: "any sobrenome one",
    email: "any_one-email@gmail.com",
    dataNascimento: {
      dia: 1,
      mes: 1,
      ano: 1970,
    },
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
    dataNascimento: {
      dia: 1,
      mes: 1,
      ano: 1977,
    },
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

export const fakerListClienteFisicoArgsFAIL: ClienteFisicoArgs[] = [
  {
    primeiroNome: "o",
    sobrenome: "any sobrenome one",
    email: "any_one-email@gmail.com",
    dataNascimento: {
      dia: 22,
      mes: 1,
      ano: 1977,
    },
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
    dataNascimento: {
      dia: 1,
      mes: 1,
      ano: 1970,
    },
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
