import { PipeFNGeneric } from "@replicasRemote";
import { listforPipeCreateClienteFisico, type ArgsClienteFisico, } from "@clienteFisico";


// -- Pipe Ok Args -- daqui sai os argumentos validos para o objetivo de criacao no controle.

const pipeCaseCreateClienteFisico = async (arg: ArgsClienteFisico, list = listforPipeCreateClienteFisico) => await PipeFNGeneric<ArgsClienteFisico, ArgsClienteFisico>(arg, list)


export {
  pipeCaseCreateClienteFisico
}

