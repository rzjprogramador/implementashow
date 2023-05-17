export interface UserFisicoArgs {
  primeiroNome: string | any;
  sobrenome: string;
  email: string;
  anoNascimento: number;
  idade?: number;
  tipoUser: TipoUser;
  endereco: Endereco;
}

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
