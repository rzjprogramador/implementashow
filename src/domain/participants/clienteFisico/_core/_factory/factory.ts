import { SuperDate, ArgsCF, BaseEntityPerson, } from "../mod.ts";

class FactoryClienteFisico extends BaseEntityPerson<ArgsCF> {
  private constructor(args: ArgsCF, ID: string) {
    super(args, ID)
    this.args.idade = this.showIdade()
  }

  static async create(args: ArgsCF, ID?: string) {
    const entity = new FactoryClienteFisico(args, ID!)
    return await entity
  }

  // members
  showIdade() {
    const year = SuperDate.currentYear();
    return year - this.args.dataNascimento.ano;
  }
}

// maker
const makerFactoryClienteFisico = async (args: ArgsCF, ID?: string) => {
  return await FactoryClienteFisico.create(args, ID)
}

export { makerFactoryClienteFisico }

/*
no maker tive que retornar .props que é o empacota as props usadas no construtor.
e apra poder acessar essa props tive que deixar public a sua configuracao, mas protegida com Readonly somente leitura após primeira atribuição ou atribuição via metodo.
*/