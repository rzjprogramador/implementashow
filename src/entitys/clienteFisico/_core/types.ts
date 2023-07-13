
interface ClienteFisicoModel extends MembersClienteFisico {
  ID?: string
  primeiroNome: string
  sobrenome: string
  anoNascimento: number
  idade?: MembersClienteFisico["showIdade"]
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