export type IClienteFisicoModel = IClienteFisicoArgs;

export interface IClienteFisicoArgs {
  ID?: string | any;
  primeiroNome: string | any;
  sobrenome: string;
  email: string;
  dataNascimento: IDataNascimento;
  idade?: number;
  tipoUser: ITipoUser;
  endereco: IEndereco;

  MembersClienteFisico?: IMembersClienteFisico;
}
type IDataNascimento = { dia: number; mes: number; ano: number };

type ITipoUser = "Fisico" | "Juridico" | "Empresa_Informal";

export interface IMembersClienteFisico {
  showIdade?: () => number;
}

interface IEndereco {
  cep: string;
  longadouro: string;
  numero: string;
  complemento: string;
  cidade: ICidade;
}
interface ICidade {
  nome: string;
  uf: string;
}

export type IExistClienteFisicoNotResponseFAIL =
  | IClienteFisicoArgs
  | IClienteFisicoModel;

export type IResponseExistClienteFisico =
  | undefined
  | IClienteFisicoModel
  | IClienteFisicoArgs;

export type IArgExistClienteFisico = Partial<IClienteFisicoModel>;

export interface IClienteFisicoRepository {
  items?: IClienteFisicoModel[];
  create: (m: IClienteFisicoModel) => Promise<IClienteFisicoModel>;
  exist: (
    m: IArgExistClienteFisico,
  ) => Promise<IResponseExistClienteFisico>;
}
