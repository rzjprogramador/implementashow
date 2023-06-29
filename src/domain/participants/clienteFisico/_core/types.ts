// deno-lint-ignore-file no-explicit-any

// -- Model -> Result Principe Entity
type ClienteFisicoModel = ArgsClienteFisico;

// -- Args Entity
interface ArgsClienteFisico extends MembersClienteFisico {
  ID?: string | any;
  primeiroNome: string | any;
  sobrenome: string;
  email: string;
  dataNascimento: DataNascimento;
  idade?: MembersClienteFisico["showIdade"];
  tipoUser: TipoUser;
  endereco: Endereco;
}

// Extends -> Members Entity :: obs: todas props devem ser opcionais.
interface MembersClienteFisico {
  showIdade?: number;
}

// -- Repository --
interface ClienteFisicoRepository {
  items?: ClienteFisicoModel[];
  create: (m: ClienteFisicoModel) => Promise<ClienteFisicoModel>;
  exist: (
    m: Partial<ClienteFisicoModel>
  ) => Promise<| undefined | ClienteFisicoModel | ArgsClienteFisico>;
}

// -- Complet Entity --
type DataNascimento = { dia: number; mes: number; ano: number };

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

// -- Disponibilizar --
export type {
  ArgsClienteFisico,
  MembersClienteFisico,
}