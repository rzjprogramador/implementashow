import {
  repositoryInUseClientefisico,
  type ArgsClienteFisico,
} from '@clienteFisico'

class CreateClienteFisicoController {
  private constructor() { }

  static async execute(args: ArgsClienteFisico) {
    try {
      const exist = repositoryInUseClientefisico.exist(args?.ID!)
      if (exist) {
        throw new Error('Ja Existe')
      }
    }

    catch (err: any) {
      return err.message
    }
  }
}

export { CreateClienteFisicoController }
