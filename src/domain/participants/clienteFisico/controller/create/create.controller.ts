// deno-lint-ignore-file no-prototype-builtins
import {
  facadeCheckArgsClienteFisico,
  type ArgsClienteFisico,
} from '@clienteFisico'
import {
  ok, badRequest,
  type HttpResponse,
} from '@replicasLocalGlobal'

class CreateClienteFisicoController {
  private constructor() { }

  static async execute(args: ArgsClienteFisico): Promise<HttpResponse | undefined> {
    try {
      await ok(await facadeCheckArgsClienteFisico(args))
    }

    catch (err: any) {
      return await badRequest(err.message)
    }
  }
}

export { CreateClienteFisicoController }
