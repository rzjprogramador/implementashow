import { objectValuesFN } from "../../../../../../externals/deps.deps.ts";
import { ClienteFisicoArgs } from "../../../deps.deps.ts";

const FirstNamePerson = objectValuesFN.FistNamePerson;

export const validateArgsClienteFisico = async (a: ClienteFisicoArgs) => {
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
  };
  return await args;
};
