import { ClienteFisicoModel } from '../../../../../../domain/entitys/clienteFisico/contracts.ts'
import { fakeIDClienteFisico, fakeListClienteFisicoArgsOK } from '../fake/fake.ts'

type SeedClienteFisico = { one: ClienteFisicoModel; two: ClienteFisicoModel }

export const seedClienteFisico: SeedClienteFisico = {
  one: {
    id: fakeIDClienteFisico.one,
    primeiroNome: fakeListClienteFisicoArgsOK[0].primeiroNome,
    sobrenome: fakeListClienteFisicoArgsOK[0].sobrenome,
    email: fakeListClienteFisicoArgsOK[0].email,
    dataNascimento: {
      dia: fakeListClienteFisicoArgsOK[0].dataNascimento.dia,
      mes: fakeListClienteFisicoArgsOK[0].dataNascimento.mes,
      ano: fakeListClienteFisicoArgsOK[0].dataNascimento.ano,
    },
    tipoUser: fakeListClienteFisicoArgsOK[0].tipoUser,
    endereco: {
      cep: fakeListClienteFisicoArgsOK[0].endereco.cep,
      longadouro: fakeListClienteFisicoArgsOK[0].endereco.longadouro,
      numero: fakeListClienteFisicoArgsOK[0].endereco.numero,
      complemento: fakeListClienteFisicoArgsOK[0].endereco.complemento,
      cidade: {
        nome: fakeListClienteFisicoArgsOK[0].endereco.cidade.nome,
        uf: fakeListClienteFisicoArgsOK[0].endereco.cidade.uf,
      },
    },
  },

  two: {
    id: fakeIDClienteFisico.two,
    primeiroNome: fakeListClienteFisicoArgsOK[1].primeiroNome,
    sobrenome: fakeListClienteFisicoArgsOK[1].sobrenome,
    email: fakeListClienteFisicoArgsOK[1].email,
    dataNascimento: {
      dia: fakeListClienteFisicoArgsOK[1].dataNascimento.dia,
      mes: fakeListClienteFisicoArgsOK[1].dataNascimento.mes,
      ano: fakeListClienteFisicoArgsOK[1].dataNascimento.ano,
    },
    tipoUser: fakeListClienteFisicoArgsOK[1].tipoUser,
    endereco: {
      cep: fakeListClienteFisicoArgsOK[1].endereco.cep,
      longadouro: fakeListClienteFisicoArgsOK[1].endereco.longadouro,
      numero: fakeListClienteFisicoArgsOK[1].endereco.numero,
      complemento: fakeListClienteFisicoArgsOK[1].endereco.complemento,
      cidade: {
        nome: fakeListClienteFisicoArgsOK[1].endereco.cidade.nome,
        uf: fakeListClienteFisicoArgsOK[1].endereco.cidade.uf,
      },
    },
  },
}

console.log(seedClienteFisico)
