import type { DataNascimento, Endereco } from "@replicasLocal";

interface ClienteFisicoModel {
  args: ArgsClienteFisico
  ID?: string
}

interface ArgsClienteFisico extends MembersClienteFisico {
  primeiroNome: string;
  sobrenome: string;
  email: string;
  dataNascimento: DataNascimento;
  idade?: number | string;
  // idade?: MembersClienteFisico["showIdade"];
  tipoUser: TipoUser;
  endereco: Endereco;
}
interface MembersClienteFisico {
  showIdade?: string | number;
}

// -- Repository --
interface ClienteFisicoRepository {
  items?: ClienteFisicoModel[];
  create: (m: ClienteFisicoModel) => Promise<ClienteFisicoModel>;
  exist: (
    m: Partial<ClienteFisicoModel>
  ) => Promise<| undefined | ClienteFisicoModel | ClienteFisicoModel>;
}

type TipoUser = "Fisico" | "Juridico" | "Empresa_Informal";


// -- Disponibilizar --
export type {
  ClienteFisicoModel,
  ArgsClienteFisico,
  MembersClienteFisico,
}