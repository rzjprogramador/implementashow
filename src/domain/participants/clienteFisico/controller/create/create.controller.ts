import { caseCreateClienteFisicoArgsValid } from "../../usecases/create/create.ts"

/**
 * daqui sairá o executeController do objetivo para ser utilizado no endpointServer para resposta ao clienteRequest
*/

export const executeCreateClienteFisico = async () => {
  const res = await caseCreateClienteFisicoArgsValid

  // gravar o validado

  return res
}