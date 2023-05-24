import { UserFisicoModel } from "../../../../domain/entitys/user_fisico/contracts.ts";
import { fakeIDUserFisico, fakeListUserFisicoArgsOK } from "../fake/fake.ts";

type SeedUserFisico = { one: UserFisicoModel; two: UserFisicoModel };

export const seedUserFisico: SeedUserFisico = {
  one: {
    id: fakeIDUserFisico.one,
    primeiroNome: fakeListUserFisicoArgsOK[0].primeiroNome,
    sobrenome: fakeListUserFisicoArgsOK[0].sobrenome,
    email: fakeListUserFisicoArgsOK[0].email,
    dataNascimento: {
      dia: fakeListUserFisicoArgsOK[0].dataNascimento.dia,
      mes: fakeListUserFisicoArgsOK[0].dataNascimento.mes,
      ano: fakeListUserFisicoArgsOK[0].dataNascimento.ano,
    },
    tipoUser: fakeListUserFisicoArgsOK[0].tipoUser,
    endereco: {
      cep: fakeListUserFisicoArgsOK[0].endereco.cep,
      longadouro: fakeListUserFisicoArgsOK[0].endereco.longadouro,
      numero: fakeListUserFisicoArgsOK[0].endereco.numero,
      complemento: fakeListUserFisicoArgsOK[0].endereco.complemento,
      cidade: {
        nome: fakeListUserFisicoArgsOK[0].endereco.cidade.nome,
        uf: fakeListUserFisicoArgsOK[0].endereco.cidade.uf,
      },
    },
  },

  two: {
    id: fakeIDUserFisico.two,
    primeiroNome: fakeListUserFisicoArgsOK[1].primeiroNome,
    sobrenome: fakeListUserFisicoArgsOK[1].sobrenome,
    email: fakeListUserFisicoArgsOK[1].email,
    dataNascimento: {
      dia: fakeListUserFisicoArgsOK[1].dataNascimento.dia,
      mes: fakeListUserFisicoArgsOK[1].dataNascimento.mes,
      ano: fakeListUserFisicoArgsOK[1].dataNascimento.ano,
    },
    tipoUser: fakeListUserFisicoArgsOK[1].tipoUser,
    endereco: {
      cep: fakeListUserFisicoArgsOK[1].endereco.cep,
      longadouro: fakeListUserFisicoArgsOK[1].endereco.longadouro,
      numero: fakeListUserFisicoArgsOK[1].endereco.numero,
      complemento: fakeListUserFisicoArgsOK[1].endereco.complemento,
      cidade: {
        nome: fakeListUserFisicoArgsOK[1].endereco.cidade.nome,
        uf: fakeListUserFisicoArgsOK[1].endereco.cidade.uf,
      },
    },
  },
};

console.log(seedUserFisico);
