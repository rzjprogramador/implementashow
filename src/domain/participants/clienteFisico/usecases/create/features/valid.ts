import {
  type ArgsClienteFisico,
} from "@clienteFisico";
import { Firstname } from "@replicasRemote"

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
  return await validatedsFields
}

export { validateFieldsArgsClienteFisico }