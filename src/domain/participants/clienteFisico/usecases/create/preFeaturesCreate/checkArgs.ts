import {
  type ArgsClienteFisico,
} from '@clienteFisico'
import { hasPropertyID } from './suboperations/subCheckArgs.ts'

const facadeCheckArgsClienteFisico = async (args: ArgsClienteFisico) => {
  await hasPropertyID(args)
}


export { facadeCheckArgsClienteFisico }