// deno-lint-ignore-file ban-types require-await no-explicit-any
import {
  // validateFieldsArgsClienteFisico,
  // createFactoryClienteFisico,
  makerFactoryClienteFisico,
  type ArgsClienteFisico,
} from "@clienteFisico";

import { Firstname } from '@replicasRemote'
// import { PipeGeneric } from '@replicasRemote'

const validateFieldsArgsClienteFisico = async (args: ArgsClienteFisico): Promise<ArgsClienteFisico> => {

  const { primeiroNome, sobrenome, email, dataNascimento: {
    dia, mes, ano
  } } = args

  const validatedsFields: ArgsClienteFisico = {
    primeiroNome: await Firstname(primeiroNome),
    sobrenome: sobrenome,
    email: email,
    dataNascimento: {
      dia: dia,
      mes: mes,
      ano: ano,
    },
    idade: args.idade,
    tipoUser: args.tipoUser,
    endereco: {
      cep: args.endereco.cep,
      longadouro: args.endereco.longadouro,
      numero: args.endereco.numero,
      complemento: args.endereco.complemento,
      cidade: {
        nome: args.endereco.cidade.nome,
        uf: args.endereco.cidade.uf,
      },
    },
  }
  return validatedsFields
}

const createFactoryClienteFisico = async (args: ArgsClienteFisico) => {
  return await makerFactoryClienteFisico(args)
}

const listFeatArgsClienteFisico = [
  validateFieldsArgsClienteFisico,
  createFactoryClienteFisico,
]

// const pipeGeneric = <I extends unknown>(target: I, listFunctions: Function[] | any) =>
//   listFunctions.reduce(async (acc: unknown, fn: Function) => await fn(acc), target);

/**
 * @description acoes realizadas com o input de argumentos, para serem usadas no usecase -> create
 * @actions_in_args 1- validar_argumentos +, 2- fabricarEntity +
 * @returns daqui sai os argumentos validos para o objetivo de criacao no controle.
 */

const pipecaseCreateClienteFisico = async (target: ArgsClienteFisico) => {
  return listFeatArgsClienteFisico.reduce((acc: any, fn) => fn(acc), target)
}

export {
  pipecaseCreateClienteFisico
}
