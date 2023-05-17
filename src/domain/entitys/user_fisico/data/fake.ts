import { UserFisicoArgs } from "../contracts.ts";

export const fakeListUserFisicoArgs: UserFisicoArgs[] = [
  {
    primeiroNome: "reinaldo",
    sobrenome: "string",
    email: "string",
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
