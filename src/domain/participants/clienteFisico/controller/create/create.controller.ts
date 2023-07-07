import {
  pipecaseCreateClienteFisico,
  type ArgsClienteFisico,
} from "@clienteFisico"

class CreateClienteFisicoController {
  private constructor() { }

  static async execute(args: ArgsClienteFisico | any) {

    try {
      return {
        data: await pipecaseCreateClienteFisico(args),
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

export { CreateClienteFisicoController }

/*
  * validar + gravar o validado
* todo: por estar dando throw nao to capturando o status 400
*/