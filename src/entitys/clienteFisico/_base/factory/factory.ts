
// -- Factory baseada na Base_Abstrata --

import { BaseEntityPerson } from "@globalEntitys";
import { ClienteFisicoModel, ClienteFisicoRequest } from "@clienteFisico";

class FactoryClienteFisico extends BaseEntityPerson<ClienteFisicoModel> {

  private constructor(args: ClienteFisicoModel, ID: string) {
    super(args, ID)
    this.args.idade = this?.showIdade?.()
    this.args.nomeCompleto = this?.nomeCompleto?.()
  }

  static async create(args: ClienteFisicoModel, ID?: string) {
    return await new FactoryClienteFisico(args, ID!)
  }

  // members
  nomeCompleto() {
    return `${this.args.primeiroNome} ${this.args.sobrenome}`;
  }

  showIdade() {
    return 2023 - this.args.anoNascimento
  }
}

// maker
const makerFactoryClienteFisico = async (args: ClienteFisicoRequest, ID?: string) => {
  return await FactoryClienteFisico.create(args, ID)
}

export { makerFactoryClienteFisico }