// deno-lint-ignore-file ban-types
import {
  makerFactoryClienteFisico,
  type ArgsClienteFisico,
  type ClienteFisicoModel,
} from "@clienteFisico";
import { FirstName, Sobrenome, Email } from "@replicasLocal"

// -- Feats --
// -- fabricar + validar_argumentos +
// daqui sai a lista de acoes feitas sobre os argumentos, para serem usadas no usecase.

const createFactoryClienteFisico = async (args: ArgsClienteFisico) => {
  return await makerFactoryClienteFisico(args)
}

const validateFieldsArgsClienteFisico = async (args: ClienteFisicoModel): Promise<ArgsClienteFisico> => {
  const fieldsValidateds: ArgsClienteFisico = {
    primeiroNome: await FirstName(args.args.primeiroNome),
    sobrenome: await Sobrenome(args.args.sobrenome),
    email: await Email(args.args.email),
    dataNascimento: {
      dia: args.args.dataNascimento.dia,
      mes: args.args.dataNascimento.mes,
      ano: args.args.dataNascimento.ano,
    },
    idade: args.args.idade,
    tipoUser: args.args.tipoUser,
    endereco: {
      cep: args.args.endereco.cep,
      longadouro: args.args.endereco.longadouro,
      numero: args.args.endereco.numero,
      complemento: args.args.endereco.complemento,
      cidade: {
        nome: args.args.endereco.cidade.nome,
        uf: args.args.endereco.cidade.uf,
      },
    },
  }
  return await fieldsValidateds
}

// ---------------------------------------------------------------------------
// -- List EXPORT for Pipe --
const listforPipeCreateClienteFisico: Function[] = [createFactoryClienteFisico, validateFieldsArgsClienteFisico,]

export {
  listforPipeCreateClienteFisico
}

