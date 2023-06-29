// deno-lint-ignore-file ban-types
import {
  factoryClienteFisico,
  type ArgsClienteFisico,
  type ClienteFisicoModel,
} from "../../_core/mod.ts";

// -- Feats --
const createFactoryClienteFisico = async (args: ArgsClienteFisico): Promise<ClienteFisicoModel> => {
  return await factoryClienteFisico(args)
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

