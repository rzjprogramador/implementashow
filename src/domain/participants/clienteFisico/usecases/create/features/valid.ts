import {
  type ArgsClienteFisico,
} from "@clienteFisico";
import { Firstname } from "@replicasRemote"

const validateFieldsArgsClienteFisico = async (args: ArgsClienteFisico): Promise<ArgsClienteFisico> => {

  const { primeiroNome, sobrenome, email, dataNascimento: {
    dia, mes, ano
  },
    idade,
    tipoUser,
    endereco: {
      cep, longadouro, numero, complemento,
      cidade: {
        nome_cidade, uf
      }
    }
  } = args

  const validatedsFields: ArgsClienteFisico = {
    primeiroNome: await Firstname(primeiroNome),
    sobrenome: sobrenome,
    email: email,
    dataNascimento: {
      dia: dia,
      mes: mes,
      ano: ano,
    },
    idade: idade,
    tipoUser: tipoUser,
    endereco: {
      cep: cep,
      longadouro: longadouro,
      numero: numero,
      complemento: complemento,
      cidade: {
        nome_cidade: nome_cidade,
        uf: uf,
      },
    },
  }
  return await validatedsFields
}

export { validateFieldsArgsClienteFisico }