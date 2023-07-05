import {
  caseCreateClienteFisico,
  type ArgsClienteFisico,
} from "@clienteFisico"

class CreateClienteFisico {
  private constructor() { }

  static async execute(args: ArgsClienteFisico) {
    try {
      return {
        data: await caseCreateClienteFisico(args),
        statusCode: 200,
      }
    }
    catch (err: any) {
      return {
        data: await err.message,
        statusCode: 400,
      }
    }

  }

}

export { CreateClienteFisico }

/*
  * validar + gravar o validado
*/