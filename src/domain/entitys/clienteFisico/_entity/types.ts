// -- Model -> Result Principe Entity
type IClienteFisicoModel = IClienteFisicoArgs;

// -- Args Entity
interface IClienteFisicoArgs extends IMembersClienteFisico {
  ID?: string | any;
  primeiroNome: string | any;
  sobrenome: string;
  email: string;
  dataNascimento: IDataNascimento;
  idade?: IMembersClienteFisico["showIdade"];
  tipoUser: ITipoUser;
  endereco: IEndereco;
}

// Extends -> Members Entity :: obs: todas props devem ser opcionais.
interface IMembersClienteFisico {
  showIdade?: number;
}

// -- Repository --
interface IClienteFisicoRepository {
  items?: IClienteFisicoModel[];
  create: (m: IClienteFisicoModel) => Promise<IClienteFisicoModel>;
  exist: (
    m: IArgExistClienteFisico,
  ) => Promise<| undefined | IClienteFisicoModel | IClienteFisicoArgs>;
}

// -- Functions --
type ClienteFisicoEntityFN = (d: IClienteFisicoArgs) => Promise<IClienteFisicoArgs>

// -- Methods --
type IArgExistClienteFisico = Partial<IClienteFisicoModel>;

// -- Complet Entity --
type IDataNascimento = { dia: number; mes: number; ano: number };

type ITipoUser = "Fisico" | "Juridico" | "Empresa_Informal";

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

// -- Disponibilizar --
export type {
  IClienteFisicoArgs,
  IMembersClienteFisico,
  ClienteFisicoEntityFN
}