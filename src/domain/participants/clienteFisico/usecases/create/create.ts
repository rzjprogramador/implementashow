import {
  PipeFNGeneric,
  type ArgsClienteFisico,
  type ClienteFisicoModel,
} from "../../_core/mod.ts";
import { listCreateClienteFisico } from "./resources.ts";


// -- Transform Entity Args in Model --
const usecaseCreateClienteFisico = (args: ArgsClienteFisico): ClienteFisicoModel => {
  return PipeFNGeneric(args, listCreateClienteFisico)
}

export {
  usecaseCreateClienteFisico
}

