// deno-lint-ignore-file ban-types
// deno-lint-ignore-file ban-types
import {
  makerFactoryClienteFisico,
  type ArgsClienteFisico,
} from "@clienteFisico";
import { FirstName } from "@replicasLocal"

// -- Feats --
// -- 1- validar_argumentos +, 2- fabricarEntity +
// daqui sai a lista de acoes feitas sobre os argumentos, para serem usadas no usecase.



const validateFieldsArgsClienteFisico = async (args: ArgsClienteFisico): Promise<ArgsClienteFisico> => {

  const { primeiroNome, sobrenome, email, dataNascimento: {
    dia, mes, ano
  } } = args

  const validatedsFields: ArgsClienteFisico = {
    primeiroNome: await FirstName(primeiroNome),
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
  return await validatedsFields
}

const createFactoryClienteFisico = async (args: ArgsClienteFisico) => {
  return await makerFactoryClienteFisico(args)
}

// -- List EXPORT for Pipe -- é importante a ordem para lógica das features no array --
const listforPipeCreateClienteFisico: Function[] = [validateFieldsArgsClienteFisico, createFactoryClienteFisico,]

// -- PIPE --

const pipeCaseCreateClienteFisico = async (args: ArgsClienteFisico, listFunctions: Function[] = listforPipeCreateClienteFisico) =>
  await listFunctions.reduce((acc, fns) =>
    fns(acc), args)


export {
  pipeCaseCreateClienteFisico
}

// -- Pipe Ok Args -- daqui sai os argumentos validos para o objetivo de criacao no controle.
