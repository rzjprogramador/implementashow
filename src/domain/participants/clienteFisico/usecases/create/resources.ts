// deno-lint-ignore-file ban-types
import {
  makerFactoryClienteFisico,
  type ArgsClienteFisico,
  type ClienteFisicoModel,
} from "../../_base/mod.ts";

// -- Feats --
const createFactoryClienteFisico = async (args: ArgsClienteFisico) => {
  return await makerFactoryClienteFisico(args)
}

const featAddRegistersClienteFisico = (args: ClienteFisicoModel): ClienteFisicoModel => {
  return args
}

// -- List --
const listCreateClienteFisico: Function[] = [createFactoryClienteFisico, featAddRegistersClienteFisico,]

export {
  listCreateClienteFisico
}

