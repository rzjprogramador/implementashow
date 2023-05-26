import { ClienteFisicoArgs } from '../../../contracts.ts'
import { membersClienteFisico } from './members.ts'

export const generatorProtoClienteFisico = (a: ClienteFisicoArgs) => {
  const prototypeEntity: ClienteFisicoArgs = Object.create(membersClienteFisico)

  const { primeiroNome, sobrenome, email, dataNascimento, tipoUser } = a

  prototypeEntity.primeiroNome = primeiroNome
  prototypeEntity.sobrenome = sobrenome
  prototypeEntity.email = email
  prototypeEntity.dataNascimento = {
    dia: dataNascimento.dia,
    mes: dataNascimento.mes,
    ano: dataNascimento.ano,
  }
  prototypeEntity.tipoUser = tipoUser

  prototypeEntity.endereco = {
    cep: a.endereco.cep,
    longadouro: a.endereco.longadouro,
    numero: a.endereco.numero,
    complemento: a.endereco.complemento,

    cidade: {
      nome: a.endereco.cidade.nome,
      uf: a.endereco.cidade.uf,
    },
  }

  return prototypeEntity
}
