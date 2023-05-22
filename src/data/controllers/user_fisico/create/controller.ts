// deno-lint-ignore-file no-explicit-any

import { HttpResponse, ok } from "../../../../../global/helpers/httpResponse.ts";
import { modObjectsValueFN } from "../../../../../global/imports/mod_deps.ts";
import { feedbacks } from "../../../../../global/literals/feedbacks.ts";
import { UserFisicoArgs, UserFisicoModel } from "../../../../domain/entitys/user_fisico/contracts.ts";
import { saveCreateUserFisico } from "../../../../domain/entitys/user_fisico/usecases/create/save/save.ts";

const FirstNamePerson = modObjectsValueFN.FistNamePerson;

type ControllerCreateUserFisicoFN = (
  d: UserFisicoArgs,
) => Promise<HttpResponse<UserFisicoModel>>;

export const controllerCreateUserFisico: ControllerCreateUserFisicoFN = async (
  d,
) => {
  const checkArgs: UserFisicoArgs = await {
    primeiroNome: await FirstNamePerson(d.primeiroNome),
    sobrenome: d.sobrenome,
    email: d.email,
    dataNascimento: {
      dia: d.dataNascimento.dia,
      mes: d.dataNascimento.mes,
      ano: d.dataNascimento.ano,
    },
    tipoUser: d.tipoUser,
    endereco: {
      cep: d.endereco.cep,
      longadouro: d.endereco.longadouro,
      numero: d.endereco.numero,
      complemento: d.endereco.complemento,
      cidade: {
        nome: d.endereco.cidade.nome,
        uf: d.endereco.cidade.uf,
      },
    },
  };

  const model: UserFisicoModel = await saveCreateUserFisico(checkArgs);

  const feedBackOk = [feedbacks.createOk];
  return await ok(model, feedBackOk);
};
