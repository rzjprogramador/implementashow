
interface ClienteFisicoModel extends MembersClienteFisico {
  ID?: string
  primeiroNome: string
  sobrenome: string
  idade?: MembersClienteFisico["showIdade"]
  anoNascimento: number
  nomeCompleto?: MembersClienteFisico["nomeCompleto"]
}

type ClienteFisicoRequest = Omit<ClienteFisicoModel, 'ID' | 'idade'>

interface MembersClienteFisico {
  nomeCompleto?: string
  showIdade?: number
}

export type {
  ClienteFisicoModel,
  ClienteFisicoRequest,

}