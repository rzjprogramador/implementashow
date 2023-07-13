// deno-lint-ignore-file no-explicit-any
import { ClienteFisicoModel } from "@clienteFisico";
import { FirstnamePerson } from "@remotes";


const validatesClienteFisico = async (args: ClienteFisicoModel) => {
  const { primeiroNome, sobrenome, anoNascimento } = args

  const valids = {
    primeiroNome: await FirstnamePerson(primeiroNome),
    sobrenome,
    anoNascimento,
  }
  return await valids
}

const listPipeClienteFisico = [validatesClienteFisico]

const CreateClienteFisicoCasePipeArgs = async (args: ClienteFisicoModel) => {
  try {
    return await listPipeClienteFisico.reduce((acc: any, fn) => fn(acc), args)
  }
  catch (err: any) {
    throw await err
  }
}

export { CreateClienteFisicoCasePipeArgs }
