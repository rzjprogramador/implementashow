// deno-lint-ignore-file ban-types require-await no-explicit-any
import {
  listFeatArgsClienteFisico,
  type ArgsClienteFisico,
} from "@clienteFisico";

/**
 * @description acoes realizadas com o input de argumentos, para serem usadas no usecase -> create
 * @actions_in_args 1- validar_argumentos +, 2- fabricarEntity +
 * @returns daqui sai os argumentos validos para o objetivo de criacao no controle.
 */

const pipecaseCreateClienteFisico = async (target: ArgsClienteFisico) => {
  return listFeatArgsClienteFisico.reduce((acc: any, fn) => fn(acc), target)
}

export {
  pipecaseCreateClienteFisico
}
