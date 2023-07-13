import { ClienteFisicoModel } from "@clienteFisico";
import { CreateClienteFisicoCasePipeArgs } from "../../create/create.usecase.ts";
import { createFactoryClienteFisicoMaker } from "../../../_core/factory/factory.ts";


class CreateclienteFisicoController {
  static pipeArgs = CreateClienteFisicoCasePipeArgs
  static createFactory = createFactoryClienteFisicoMaker

  static async execute(args: ClienteFisicoModel) {
    const argsFilters = await CreateclienteFisicoController.pipeArgs(args)
    const factory = await CreateclienteFisicoController.createFactory(argsFilters)
    const model = { ...factory }

    try {
      return await model
    }
    catch (err: any) {
      return err.message
    }
  }

}

const createClienteFisicoControllerMaker = async (args: ClienteFisicoModel) => {
  return await CreateclienteFisicoController.execute(args)
}

export { createClienteFisicoControllerMaker }