// deno-lint-ignore-file no-prototype-builtins
import {
  type ArgsClienteFisico,
} from '@clienteFisico'
import { ExceptionsMessages } from "@replicasLocal"

const facadeCheckArgsClienteFisico = (args: ArgsClienteFisico) => {
  if (args.hasOwnProperty('ID')) {
    throw new Error(ExceptionsMessages.existID)
  }
}

export { facadeCheckArgsClienteFisico }