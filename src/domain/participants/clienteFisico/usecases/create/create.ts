import {
  PipeFNGeneric,
  type ArgsClienteFisico,
} from "../../_base/mod.ts";
import { listforPipeCreateClienteFisico } from "./listFeaturesForPipe/listArgsFeatures.ts";


// -- Pipe Ok Args -- daqui sai os argumentos validos para o objetivo de criacao no controle.

const caseCreateClienteFisicoArgsValid = async (arg: ArgsClienteFisico, list = listforPipeCreateClienteFisico) => await PipeFNGeneric<ArgsClienteFisico, ArgsClienteFisico>(arg, list)


export {
  caseCreateClienteFisicoArgsValid
}

