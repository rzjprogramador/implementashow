import { objectDateCurrent } from "../../../../../../../_subir_mods_ts/dateCurrent/main.ts";
import { ClienteFisicoArgs } from "../../../contracts.ts";

class ClienteFisicoFactory {
  private constructor(public readonly args: ClienteFisicoArgs) {
    this.args = args;
  }

  static create(args: ClienteFisicoArgs) {
    const foo = args;
    const res = { ...foo };
    return new ClienteFisicoFactory(res);
  }

  // membros instancias
  showIdade() {
    const year = objectDateCurrent.currentYear();
    return year - this.args.dataNascimento.ano;
  }
}

const createNewClienteFisicoFactory = (a: ClienteFisicoArgs) => {
  const instance = ClienteFisicoFactory.create(a);
  return instance.args;
};

export { createNewClienteFisicoFactory };
