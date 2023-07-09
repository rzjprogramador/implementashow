import type { DataNascimento, Endereco } from "@replicasLocalGlobal";

interface ClienteFisicoModel extends ArgsClienteFisico {
  ID: string
}

interface ArgsClienteFisico extends MembersClienteFisico {
  ID?: string;
  primeiroNome: string;
  sobrenome: string;
  email: string;
  dataNascimento: DataNascimento;
  // idade?: number | string;
  idade?: MembersClienteFisico["showIdade"];
  tipoUser: TipoUser;
  endereco: Endereco;
}
interface MembersClienteFisico {
  showIdade?: string | number;
}

// -- Repository --
interface ClienteFisicoRepository {
  _items?: ClienteFisicoModel[];
  exist: (ID: string) => boolean;
  // create: (m: ClienteFisicoModel) => Promise<ClienteFisicoModel>;
}

type TipoUser = "Fisico" | "Juridico" | "Empresa_Informal";


// -- Disponibilizar --
export type {
  ClienteFisicoModel,
  ArgsClienteFisico,
  MembersClienteFisico,
  ClienteFisicoRepository,
}