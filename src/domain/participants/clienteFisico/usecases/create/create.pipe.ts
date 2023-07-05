// deno-lint-ignore-file ban-types
import {
  validateFieldsArgsClienteFisico,
  createFactoryClienteFisico,
  type ArgsClienteFisico,
} from "@clienteFisico";

/**
 * @description acoes realizadas com o input de argumentos, para serem usadas no usecase -> create
 * @actions_in_args 1- validar_argumentos +, 2- fabricarEntity +
 * @returns daqui sai os argumentos validos para o objetivo de criacao no controle.
 */

const caseCreateClienteFisico = async (args: ArgsClienteFisico) => {
  const valid = await validateFieldsArgsClienteFisico(args)
  const factory = await createFactoryClienteFisico(valid)
  return await factory
}

export {
  caseCreateClienteFisico
}
