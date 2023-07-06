import {
  makerFactoryClienteFisico,
  type ArgsClienteFisico,
} from "@clienteFisico";

const createFactoryClienteFisico = async (args: ArgsClienteFisico) => {
  return await makerFactoryClienteFisico(args)
}

export { createFactoryClienteFisico }