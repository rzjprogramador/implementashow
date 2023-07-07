// deno-lint-ignore-file ban-types require-await no-explicit-any
import {
  listFeatArgsClienteFisico,
  type ArgsClienteFisico,
} from "@clienteFisico";

import {
  validateFieldsArgsClienteFisico,
  createFactoryClienteFisico,
} from "@clienteFisico";

import { PipeGeneric } from "@replicasRemote"

/**
 * @description configuracao passe o inputArgtarget e receber este inputArgtarget tratado.
 * @actions_in_args 1- validar_argumentos +, 2- fabricarEntity +
 * @returns daqui sai os argumentos validos para o objetivo de criacao no controle.
 */

// const pipecaseCreateClienteFisico = async (argTarget: ArgsClienteFisico) => await PipeGeneric<ArgsClienteFisico, ArgsClienteFisico>(argTarget, listFeatArgsClienteFisico)

// const pipecaseCreateClienteFisico = async (target: ArgsClienteFisico) => {
//   try {
//     return await listFeatArgsClienteFisico.reduce((acc: any, fn) => fn(acc), target)
//   }
//   catch (err: any) {
//     return err
//   }
// }

const pipecaseCreateClienteFisico = async (args: ArgsClienteFisico) => {
  const valid = await validateFieldsArgsClienteFisico(args)
  const factory = await createFactoryClienteFisico(valid)
  return await factory
}


export {
  pipecaseCreateClienteFisico
}
