import { modObjectsValueFN } from "../../../../global/imports/mod_deps.ts";
import { UserFisicoArgs } from "./contracts.ts";
import { membersUserFisico } from "./members.ts";

const { FistNamePerson } = modObjectsValueFN;

export const createPrototypeUserFisico = async (a: UserFisicoArgs) => {
  const prototypeEntity: UserFisicoArgs = await Object.create(
    membersUserFisico,
  );
  prototypeEntity.primeiroNome = await FistNamePerson(a.primeiroNome);
  prototypeEntity.sobrenome = a.sobrenome;
  prototypeEntity.email = a.email;
  prototypeEntity.anoNascimento = a.anoNascimento;
  prototypeEntity.tipoUser = a.tipoUser;

  prototypeEntity.endereco = {
    cep: a.endereco.cep,
    longadouro: a.endereco.longadouro,
    numero: a.endereco.numero,
    complemento: a.endereco.complemento,

    cidade: {
      nome: a.endereco.cidade.nome,
      uf: a.endereco.cidade.uf,
    },
  };

  return await prototypeEntity;
};
