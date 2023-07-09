// deno-lint-ignore-file no-prototype-builtins
import {
  type ArgsClienteFisico,
} from '@clienteFisico'
import { ExceptionsMessages } from "@replicasLocalGlobal"

const hasPropertyID = async (args: ArgsClienteFisico) => {
  if (await args.hasOwnProperty('ID')) {
    throw ExceptionsMessages.feedbackExistID()
  }
}

export { hasPropertyID }