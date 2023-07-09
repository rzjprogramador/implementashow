// import { SuperDateTS } from "@replicasRemote";
import { ArgsClienteFisico } from "@clienteFisico";

const membersClienteFisico = {
  showIdade(this: ArgsClienteFisico) {
    return this.dataNascimento.ano - 2023
  }
}

const generatorFactoryClienteFisico = async (args: ArgsClienteFisico) => {
  const factory = await Object.create(membersClienteFisico)
  return await Object.assign(args, factory)
}

export { generatorFactoryClienteFisico }

/*
TODO: COMPUTAR O CAMPO IDADE - SEM CRIAR UM NOVO FORA DO OBJ.

no maker tive que retornar .props que é o empacota as props usadas no construtor.
e apra poder acessar essa props tive que deixar public a sua configuracao, mas protegida com Readonly somente leitura após primeira atribuição ou atribuição via metodo.
*/