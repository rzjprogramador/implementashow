// deno-lint-ignore-file no-explicit-any
import {
  facadeCheckArgsClienteFisico,
  type ArgsClienteFisico,
} from '@clienteFisico'
import {
  ok, badRequest,
} from '@globalEntitys'

class CreateClienteFisicoController {
  private constructor() { }

  static async execute(args: ArgsClienteFisico) {
    try {
      await ok(await facadeCheckArgsClienteFisico(args))
    }

    catch (err: any) {
      return await badRequest(err)
    }
  }
}

export { CreateClienteFisicoController }
