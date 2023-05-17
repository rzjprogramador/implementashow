import { UserFisicoArgs } from "../contracts.ts";

export const fakeListUserFisicoArgs: UserFisicoArgs[] = [
  {
    primeiroNome: "reinaldo",
    sobrenome: "any sobrenome um",
    email: "any_email@gmail.com",
    anoNascimento: 1977,
    tipoUser: "Fisico",
    endereco: {
      cep: "08070140",
      longadouro: "any rua um",
      numero: "1",
      complemento: "any complemento",
      cidade: {
        nome: "Sao Paulo",
        uf: "SP",
      },
    },
  },
];
