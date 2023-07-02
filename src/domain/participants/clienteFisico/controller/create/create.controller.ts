import { pipeCaseCreateClienteFisico } from "../../usecases/create/create.pipe.ts"

/**
 * daqui sairá o executeController do objetivo para ser utilizado no endpointServer para resposta ao clienteRequest
*/

class CreateClienteFisico {
  private constructor() { }

  static async execute() {
    // const res = await pipeCaseCreateClienteFisico
    // gravar o validado
    return await'oi1'
  }

}

export { CreateClienteFisico }