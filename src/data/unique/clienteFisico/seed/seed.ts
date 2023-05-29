import { Log } from '../../../../app/dataApp/imports/mod_deps.ts';
import { ClienteFisicoModel } from '../../../../domain/entitys/clienteFisico/contracts.ts';
import { literalIDClienteFisico, literalListClienteFisicoArgsOK } from '../literals/literals.ts';

type SeedClienteFisico = { one: ClienteFisicoModel; two: ClienteFisicoModel }

export const seedClienteFisico: SeedClienteFisico = {
  one: {
    id: literalIDClienteFisico.one,
    primeiroNome: literalListClienteFisicoArgsOK[0].primeiroNome,
    sobrenome: literalListClienteFisicoArgsOK[0].sobrenome,
    email: literalListClienteFisicoArgsOK[0].email,
    dataNascimento: {
      dia: literalListClienteFisicoArgsOK[0].dataNascimento.dia,
      mes: literalListClienteFisicoArgsOK[0].dataNascimento.mes,
      ano: literalListClienteFisicoArgsOK[0].dataNascimento.ano,
    },
    tipoUser: literalListClienteFisicoArgsOK[0].tipoUser,
    endereco: {
      cep: literalListClienteFisicoArgsOK[0].endereco.cep,
      longadouro: literalListClienteFisicoArgsOK[0].endereco.longadouro,
      numero: literalListClienteFisicoArgsOK[0].endereco.numero,
      complemento: literalListClienteFisicoArgsOK[0].endereco.complemento,
      cidade: {
        nome: literalListClienteFisicoArgsOK[0].endereco.cidade.nome,
        uf: literalListClienteFisicoArgsOK[0].endereco.cidade.uf,
      },
    },
  },

  two: {
    id: literalIDClienteFisico.two,
    primeiroNome: literalListClienteFisicoArgsOK[1].primeiroNome,
    sobrenome: literalListClienteFisicoArgsOK[1].sobrenome,
    email: literalListClienteFisicoArgsOK[1].email,
    dataNascimento: {
      dia: literalListClienteFisicoArgsOK[1].dataNascimento.dia,
      mes: literalListClienteFisicoArgsOK[1].dataNascimento.mes,
      ano: literalListClienteFisicoArgsOK[1].dataNascimento.ano,
    },
    tipoUser: literalListClienteFisicoArgsOK[1].tipoUser,
    endereco: {
      cep: literalListClienteFisicoArgsOK[1].endereco.cep,
      longadouro: literalListClienteFisicoArgsOK[1].endereco.longadouro,
      numero: literalListClienteFisicoArgsOK[1].endereco.numero,
      complemento: literalListClienteFisicoArgsOK[1].endereco.complemento,
      cidade: {
        nome: literalListClienteFisicoArgsOK[1].endereco.cidade.nome,
        uf: literalListClienteFisicoArgsOK[1].endereco.cidade.uf,
      },
    },
  },
}

Log(seedClienteFisico)
