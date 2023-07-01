import type { DataNascimento, Endereco } from "../../../../_roots/deps/replicasLocal.deps.ts";

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

type TipoUser = "Fisico" | "Juridico" | "Empresa_Informal";


// -- Disponibilizar --
export type {
  ClienteFisicoModel,
  ArgsClienteFisico,
  MembersClienteFisico,
}