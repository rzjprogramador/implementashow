// deno-lint-ignore-file ban-types
import {
  makerFactoryClienteFisico,
  type ArgsCF,
  type ArgsClienteFisico,
  type ClienteFisicoModel,
} from "../../_core/mod.ts";

// -- Feats --
const createFactoryClienteFisico = async (args: ArgsCF) => {
  return await makerFactoryClienteFisico(args)
}

const featAddRegistersClienteFisico = (args: ArgsClienteFisico): ClienteFisicoModel => {
  return args
}

// -- List --
const listCreateClienteFisico: Function[] = [createFactoryClienteFisico, featAddRegistersClienteFisico,]

export {
  listCreateClienteFisico
}

