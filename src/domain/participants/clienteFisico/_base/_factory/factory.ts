import { SuperDateTS } from "@replicasRemote";
import { ArgsClienteFisico } from "@clienteFisico";
import { BaseEntityPerson } from "@replicasLocal";

class FactoryClienteFisico extends BaseEntityPerson<ArgsClienteFisico> {
  private constructor(args: ArgsClienteFisico, ID: string) {
    super(args, ID)
  }

  static async create(args: ArgsClienteFisico, ID?: string) {
    const entity = new FactoryClienteFisico(args, ID!)
    return await entity
  }

  // members
  showIdade() {
    const year = SuperDateTS.currentYear();
    const res = year - this.args.dataNascimento?.ano;
    return res;
  }
}

// maker
const makerFactoryClienteFisico = async (args: ArgsClienteFisico, ID?: string) => {
  return await FactoryClienteFisico.create(args, ID)
}

export { makerFactoryClienteFisico }

/*
TODO: COMPUTAR O CAMPO IDADE - SEM CRIAR UM NOVO FORA DO OBJ.

no maker tive que retornar .props que é o empacota as props usadas no construtor.
e apra poder acessar essa props tive que deixar public a sua configuracao, mas protegida com Readonly somente leitura após primeira atribuição ou atribuição via metodo.
*/