// deno-lint-ignore-file ban-types
import {
  PipeFNGeneric,
  factoryClienteFisico,
  type ArgsClienteFisico,
  type ClienteFisicoModel,
} from "../../_core/mod.ts";

// -- Feats --
const createFactoryClienteFisico = (args: ArgsClienteFisico): ClienteFisicoModel => {
  return factoryClienteFisico(args)
}

const featAddRegistersClienteFisico = (args: ArgsClienteFisico): ClienteFisicoModel => {
  const addRegister = { ...args, ID: '1' }
  return addRegister
}

const featAddNewFieldsClienteFisico = (args: ArgsClienteFisico): ClienteFisicoModel => {
  const transformad = { ...args, IDB: '1' }
  return transformad
}

// -- List --
const listCreateClienteFisico: Function[] = [createFactoryClienteFisico, featAddRegistersClienteFisico, featAddNewFieldsClienteFisico]

export {
  listCreateClienteFisico
}

