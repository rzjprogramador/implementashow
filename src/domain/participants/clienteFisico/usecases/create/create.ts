import {
  PipeFNGeneric,
  type ArgsClienteFisico,
  type ClienteFisicoModel,
} from "../../_base/mod.ts";
import { listforPipeCreateClienteFisico } from "./featuresForPipe/featuresForPipe.ts";


// -- Transform Entity Args in Model --
const usecaseCreateClienteFisico = async (args: ArgsClienteFisico): Promise<ClienteFisicoModel> => {
  return await PipeFNGeneric<ArgsClienteFisico, ClienteFisicoModel>(args, listforPipeCreateClienteFisico)
}

export {
  usecaseCreateClienteFisico
}

