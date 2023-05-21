import { modObjectsValueFN } from "../../../../../../global/imports/mod_deps.ts";
import { UserFisicoArgs } from "../../contracts.ts";
import { membersUserFisico } from "./members.ts";

const { FistNamePerson } = modObjectsValueFN;

export const generatorProtoUserFisico = async (a: UserFisicoArgs) => {
  const prototypeEntity: UserFisicoArgs = await Object.create(
    membersUserFisico,
  );

  const { primeiroNome, sobrenome, email, dataNascimento, tipoUser } = a;

  prototypeEntity.primeiroNome = await FistNamePerson(primeiroNome);
  prototypeEntity.sobrenome = sobrenome;
  prototypeEntity.email = email;
  prototypeEntity.dataNascimento = {
    dia: dataNascimento.dia,
    mes: dataNascimento.mes,
    ano: dataNascimento.ano,
  };
  prototypeEntity.tipoUser = tipoUser;

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
