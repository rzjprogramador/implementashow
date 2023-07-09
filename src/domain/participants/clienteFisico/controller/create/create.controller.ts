// deno-lint-ignore-file no-prototype-builtins
import {
  facadeCheckArgsClienteFisico,
  type ArgsClienteFisico,
} from '@clienteFisico'

class CreateClienteFisicoController {
  private constructor() { }

  static async execute(args: ArgsClienteFisico) {
    try {
      facadeCheckArgsClienteFisico(args)
    }

    catch (err: any) {
      return err.message
    }
  }
}

export { CreateClienteFisicoController }
