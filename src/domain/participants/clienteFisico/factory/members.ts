import { ArgsClienteFisico } from "@clienteFisico";

const membersClienteFisico = {

  showIdade(this: ArgsClienteFisico) {
    return this.dataNascimento.ano - 2023
  },

  nomeCompleto(this: ArgsClienteFisico) {
    return `${this.primeiroNome} ${this.sobrenome}`
  }
}

export { membersClienteFisico }