import {
  type ArgsClienteFisico,
} from '@clienteFisico'
import { hasPropertyID } from './suboperations/subCheckArgs.ts'
import { validateArgsClienteFisico } from './suboperations/validateArgs.ts'

const facadeCheckArgsClienteFisico = async (args: ArgsClienteFisico) => {
  await hasPropertyID(args)
  await validateArgsClienteFisico(args)
}


export { facadeCheckArgsClienteFisico }