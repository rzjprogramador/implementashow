// // deno-lint-ignore-file ban-types require-await no-explicit-any
// import {
//   listFeatArgsClienteFisico,
//   type ArgsClienteFisico,
// } from "@clienteFisico";

// import {
//   validateFieldsArgsClienteFisico,
//   createFactoryClienteFisico,
// } from "@clienteFisico";

// import { PipeGeneric } from "@remotes"

// /**
//  * @description configuracao passe o inputArgtarget e receber este inputArgtarget tratado.
//  * @actions_in_args 1- validar_argumentos +, 2- fabricarEntity +
//  * @returns daqui sai os argumentos validos para o objetivo de criacao no controle.
//  */

// const pipecaseCreateClienteFisico = async (target: ArgsClienteFisico): Promise<ArgsClienteFisico | any> => {
//   return await listFeatArgsClienteFisico.reduce(async (acc: any, fn) => {
//     try {
//       return await fn(acc)
//     }
//     catch (err: any) {
//       // throw await err.message
//       return await err.message
//     }
//   }, target)
// }

// export {
//   pipecaseCreateClienteFisico
// }
