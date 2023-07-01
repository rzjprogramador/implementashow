import {
  PipeFNGeneric,
  type ArgsClienteFisico,
  type ClienteFisicoModel,
} from "../../_base/mod.ts";
import { listCreateClienteFisico } from "./resources.ts";


// -- Transform Entity Args in Model --
const usecaseCreateClienteFisico = async (args: ArgsClienteFisico): Promise<ClienteFisicoModel> => {
  return await PipeFNGeneric<ArgsClienteFisico, ClienteFisicoModel>(args, listCreateClienteFisico)
}

export {
  usecaseCreateClienteFisico
}

