import { modObjectsValueFN } from "../../../../../../../global/imports/mod_deps.ts";
import { UserFisicoArgs } from "../../../contracts.ts";

const FirstNamePerson = modObjectsValueFN.FistNamePerson;

export const checkArgsUserFisico = async (a: UserFisicoArgs) => {
  const args = await {
    primeiroNome: await FirstNamePerson(a.primeiroNome),
    sobrenome: a.sobrenome,
    email: a.email,
    dataNascimento: {
      dia: a.dataNascimento.dia,
      mes: a.dataNascimento.mes,
      ano: a.dataNascimento.ano,
    },
    tipoUser: a.tipoUser,
    endereco: {
      cep: a.endereco.cep,
      longadouro: a.endereco.longadouro,
      numero: a.endereco.numero,
      complemento: a.endereco.complemento,
      cidade: {
        nome: a.endereco.cidade.nome,
        uf: a.endereco.cidade.uf,
      },
    },
  }
  return await args
}