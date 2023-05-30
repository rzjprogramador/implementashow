import { Log } from "@rzModulesTS";
import { ClienteFisicoModel } from "@clienteFisico";
// "@clienteFisico"
import {
  fakerIDClienteFisico,
  fakerListClienteFisicoArgsOK,
} from "../literals/fakers/faker.ts";

type SeedClienteFisico = { one: ClienteFisicoModel; two: ClienteFisicoModel };

export const seedClienteFisico: SeedClienteFisico = {
  one: {
    ID: fakerIDClienteFisico?.one,
    primeiroNome: fakerListClienteFisicoArgsOK[0].primeiroNome,
    sobrenome: fakerListClienteFisicoArgsOK[0].sobrenome,
    email: fakerListClienteFisicoArgsOK[0].email,
    dataNascimento: {
      dia: fakerListClienteFisicoArgsOK[0].dataNascimento.dia,
      mes: fakerListClienteFisicoArgsOK[0].dataNascimento.mes,
      ano: fakerListClienteFisicoArgsOK[0].dataNascimento.ano,
    },
    tipoUser: fakerListClienteFisicoArgsOK[0].tipoUser,
    endereco: {
      cep: fakerListClienteFisicoArgsOK[0].endereco.cep,
      longadouro: fakerListClienteFisicoArgsOK[0].endereco.longadouro,
      numero: fakerListClienteFisicoArgsOK[0].endereco.numero,
      complemento: fakerListClienteFisicoArgsOK[0].endereco.complemento,
      cidade: {
        nome: fakerListClienteFisicoArgsOK[0].endereco.cidade.nome,
        uf: fakerListClienteFisicoArgsOK[0].endereco.cidade.uf,
      },
    },
  },

  two: {
    ID: fakerIDClienteFisico.two,
    primeiroNome: fakerListClienteFisicoArgsOK[1].primeiroNome,
    sobrenome: fakerListClienteFisicoArgsOK[1].sobrenome,
    email: fakerListClienteFisicoArgsOK[1].email,
    dataNascimento: {
      dia: fakerListClienteFisicoArgsOK[1].dataNascimento.dia,
      mes: fakerListClienteFisicoArgsOK[1].dataNascimento.mes,
      ano: fakerListClienteFisicoArgsOK[1].dataNascimento.ano,
    },
    tipoUser: fakerListClienteFisicoArgsOK[1].tipoUser,
    endereco: {
      cep: fakerListClienteFisicoArgsOK[1].endereco.cep,
      longadouro: fakerListClienteFisicoArgsOK[1].endereco.longadouro,
      numero: fakerListClienteFisicoArgsOK[1].endereco.numero,
      complemento: fakerListClienteFisicoArgsOK[1].endereco.complemento,
      cidade: {
        nome: fakerListClienteFisicoArgsOK[1].endereco.cidade.nome,
        uf: fakerListClienteFisicoArgsOK[1].endereco.cidade.uf,
      },
    },
  },
};

Log(seedClienteFisico);
