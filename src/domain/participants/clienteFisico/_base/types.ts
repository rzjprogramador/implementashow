
interface ClienteFisicoModel {
  args: ArgsClienteFisico
  ID?: string
}

type ArgsClienteFisico = {
  primeiroNome: string;
  sobrenome: string;
  email: string;
  dataNascimento: DataNascimento;
  idade?: MembersClienteFisico["showIdade"];
  tipoUser: TipoUser;
  endereco: Endereco;
}
interface MembersClienteFisico {
  showIdade?: number;
}

// -- Repository --
interface ClienteFisicoRepository {
  items?: ClienteFisicoModel[];
  create: (m: ClienteFisicoModel) => Promise<ClienteFisicoModel>;
  exist: (
    m: Partial<ClienteFisicoModel>
  ) => Promise<| undefined | ClienteFisicoModel | ClienteFisicoModel>;
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
  ClienteFisicoModel,
  ArgsClienteFisico,
  MembersClienteFisico,
}