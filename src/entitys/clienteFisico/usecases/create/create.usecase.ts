// deno-lint-ignore-file no-explicit-any
import { ClienteFisicoModel } from "@clienteFisico";
import { makerFirstnamePerson as Firstname } from "/home/rzj/..gitAll/SuperValidades/main.ts";

const validatesClienteFisico = async (args: ClienteFisicoModel) => {
  const { primeiroNome, sobrenome, anoNascimento } = args

  const valids = {
    primeiroNome: await Firstname(primeiroNome),
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

/*
primeiroNome
sobrenome
anoNascimento
  */