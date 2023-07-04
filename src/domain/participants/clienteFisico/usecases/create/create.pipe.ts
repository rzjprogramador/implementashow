// deno-lint-ignore-file ban-types
import { listforPipeCreateClienteFisico, type ArgsClienteFisico, } from "@clienteFisico";


const pipeCaseCreateClienteFisico = async (args: ArgsClienteFisico, listFunctions: Function[] = listforPipeCreateClienteFisico) =>
  await listFunctions.reduce((acc, fns) =>
    fns(acc), args)


export {
  pipeCaseCreateClienteFisico
}

// -- Pipe Ok Args -- daqui sai os argumentos validos para o objetivo de criacao no controle.
