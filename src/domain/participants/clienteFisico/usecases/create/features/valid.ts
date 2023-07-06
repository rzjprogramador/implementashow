import {
  type ArgsClienteFisico,
} from "@clienteFisico";
import { Firstname } from "@replicasRemote"

const validateFieldsArgsClienteFisico = async (args: ArgsClienteFisico): Promise<ArgsClienteFisico> => {

  // const { primeiroNome, sobrenome, email, dataNascimento: {
  //   dia, mes, ano
  // } } = argsTODO : NAO ESTA CONSEGUINDO LER A prop: ano no console.
  //

  const validatedsFields: ArgsClienteFisico = {
    primeiroNome: await Firstname(args.primeiroNome),
    sobrenome: args.sobrenome,
    email: args.email,
    dataNascimento: {
      dia: args.dataNascimento.dia,
      mes: args.dataNascimento.mes,
      ano: args.dataNascimento.ano,
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