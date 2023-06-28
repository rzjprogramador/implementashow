import { SuperDate, IClienteFisicoArgs, } from "./mod.ts";

class FactoryClienteFisico {
  constructor(public readonly props: IClienteFisicoArgs) {
    this.props.idade = this.showIdade()
  }

  // members
  showIdade() {
    const year = SuperDate.currentYear();
    return year - this.props.dataNascimento.ano;
  }
}

// maker
const factoryClienteFisico = (props: IClienteFisicoArgs) => {
  const instance = new FactoryClienteFisico(props)
  return instance.props
}

export { factoryClienteFisico }

/*
no maker tive que retornar .props que é o empacota as props usadas no construtor.
e apra poder acessar essa props tive que deixar public a sua configuracao, mas protegida com Readonly somente leitura após primeira atribuição ou atribuição via metodo.
*/