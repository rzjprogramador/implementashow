import { ClienteFisicoModel } from "@clienteFisico";
import { CreateClienteFisicoCasePipeArgs } from "../../create/create.usecase.ts";
import { createFactoryClienteFisicoMaker } from "../../../_core/factory/factory.ts";


class CreateclienteFisicoController {
  private pipeArgs = CreateClienteFisicoCasePipeArgs
  private createFactory = createFactoryClienteFisicoMaker

  async execute(args: ClienteFisicoModel) {
    const argsFilters = await this.pipeArgs(args)
    const factory = await this.createFactory(argsFilters)
    const model = { ...factory }

    try {
      return await model
    }
    catch (err: any) {
      return err.message
    }
  }

}

const preClienteFisicoControllerMaker = async () => {
  return await new CreateclienteFisicoController()
}

const createClienteFisicoControllerMaker = await preClienteFisicoControllerMaker()

export { createClienteFisicoControllerMaker }