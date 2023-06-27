type IClienteFisicoModel = IClienteFisicoArgs;

interface IClienteFisicoArgs {
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

interface IMembersClienteFisico {
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

type IExistClienteFisicoNotResponseFAIL =
  | IClienteFisicoArgs
  | IClienteFisicoModel;

type IResponseExistClienteFisico =
  | undefined
  | IClienteFisicoModel
  | IClienteFisicoArgs;

type IArgExistClienteFisico = Partial<IClienteFisicoModel>;

interface IClienteFisicoRepository {
  items?: IClienteFisicoModel[];
  create: (m: IClienteFisicoModel) => Promise<IClienteFisicoModel>;
  exist: (
    m: IArgExistClienteFisico,
  ) => Promise<IResponseExistClienteFisico>;
}

// functions
type ClienteFisicoEntityFN = (d: IClienteFisicoArgs) => Promise<IClienteFisicoArgs>

// -- disponibilizar --
export type {
  IClienteFisicoArgs,
  ClienteFisicoEntityFN
}