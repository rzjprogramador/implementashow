// deno-lint-ignore-file no-prototype-builtins no-explicit-any ban-unused-ignore
import { setsClienteFisico, type ArgsClienteFisico } from '@clienteFisico'
import { type FeedbackException } from "@replicasLocalGlobal"
import { Firstname } from '@replicasRemote'

const setMinLettersLocal = setsClienteFisico.minLetters

const validateArgsClienteFisico = async (args: ArgsClienteFisico): Promise<ArgsClienteFisico | FeedbackException> => {
  try {
    const validateds = {
      primeiroNome: await Firstname(args.primeiroNome, setMinLettersLocal, setsClienteFisico.feedSetsWithNumber(setMinLettersLocal)),
    }

    const provisorio = { ...args, validateds }
    // obs: provisorio enquanto nao valido todos campos ???

    return await provisorio
  }
  catch (err: any) {
    throw {
      cause: err.message
    }
  }
}

export { validateArgsClienteFisico }