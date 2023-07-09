// deno-lint-ignore-file no-prototype-builtins
import {
  type ArgsClienteFisico,
} from '@clienteFisico'
import {
  setsADM,
  type FeedbackException
} from "@replicasLocalGlobal"
import { Firstname } from '@replicasRemote'


const setMinLettersLocal = setsADM.minLetters

const validateArgsClienteFisico = async (args: ArgsClienteFisico): Promise<ArgsClienteFisico | FeedbackException> => {
  try {
    const validateds = {
      primeiroNome: await Firstname(args.primeiroNome, setMinLettersLocal, setsADM.feedSetsWithNumber(setMinLettersLocal)),
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