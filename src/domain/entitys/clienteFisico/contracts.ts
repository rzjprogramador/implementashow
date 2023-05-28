type RegisterPerson = { id: string };

export type ClienteFisicoModel = ClienteFisicoArgs & RegisterPerson;

export interface ClienteFisicoArgs {
  ID?: string;
  primeiroNome: string | any;
  sobrenome: string;
  email: string;
  dataNascimento: DataNascimento;
  idade?: number;
  tipoUser: TipoUser;
  endereco: Endereco;

  MembersClienteFisico?: MembersClienteFisico;
}
type DataNascimento = { dia: number; mes: number; ano: number };
type TipoUser = "Fisico" | "Juridico" | "Empresa_Informal";
export interface MembersClienteFisico {
  showIdade?: () => number;
}

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

export type ExistClienteFisicoNotResponseFAIL =
  | ClienteFisicoArgs
  | ClienteFisicoModel;

export type ResponseExistClienteFisico = null | ClienteFisicoModel | ClienteFisicoArgs ;

export type ArgExistClienteFisico = ClienteFisicoArgs | ClienteFisicoModel

export interface ClienteFisicoRepository {
  items?: ClienteFisicoModel[];
  create: (m: ClienteFisicoModel) => Promise<ClienteFisicoModel>;
  exist: (
    m: ArgExistClienteFisico,
  ) => Promise<ResponseExistClienteFisico>;
}
