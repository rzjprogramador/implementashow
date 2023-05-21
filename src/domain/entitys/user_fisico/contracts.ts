
type RegisterPerson = { id: string}

export type UserFisicoModel = UserFisicoArgs & RegisterPerson

export interface UserFisicoArgs {
  primeiroNome: string | any;
  sobrenome: string;
  email: string;
  dataNascimento: DataNascimento;
  idade?: number;
  tipoUser: TipoUser;
  endereco: Endereco;
}
type DataNascimento = { dia: number, mes: number, ano: number}
type TipoUser = "Fisico" | "Juridico" | "Empresa_Informal";

interface Endereco {
  cep: string;
  longadouro: string;
  numero: string;
  complemento: string;
  cidade: Cidade;
}
interface Cidade {
  nome: string;
  uf: string;
}
