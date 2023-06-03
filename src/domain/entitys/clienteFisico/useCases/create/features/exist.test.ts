// deno-lint-ignore-file no-unused-vars no-explicit-any
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { Log } from "../../../../../../externals/externalsDeps.deps.ts";
import { feedbacksGlobal } from "../../../../../../global/globalDeps.deps.ts";
import {
  ArgExistClienteFisico,
  ClienteFisicoModel,
  seedClienteFisico,
} from "../../../clienteFisico.deps.ts";

const inputWithIDMockOK: Partial<ClienteFisicoModel> = {
  primeiroNome: seedClienteFisico.one.primeiroNome,
  sobrenome: seedClienteFisico.one.sobrenome,
  // O INPUT OK >>  NAO TEM ID
};

const inputWithoutIDMockFAIL: Partial<ClienteFisicoModel> = {
  ID: seedClienteFisico?.one,
  primeiroNome: seedClienteFisico.one.primeiroNome,
  sobrenome: seedClienteFisico.one.sobrenome,
  // O INPUT FAIL >> TEM ID
};

const repositoryMockOK = {
  items: [],
  async exist(m: Partial<ClienteFisicoModel>) {
    return await this?.items?.find((m: Partial<ClienteFisicoModel>) =>
      m.ID === m.ID
    );
  },
};

const repositoryMockFAIL = {
  items: [inputWithIDMockOK],
  async exist(m: Partial<ClienteFisicoModel>) {
    return await this?.items?.find((m: Partial<ClienteFisicoModel>) =>
      m?.ID === m.ID
    );
  },
};

// NESTES 2 FEAT MOCKADOS ESTOU MUDANDO SOMENTE O REPO ONDE SALVAM - 1 COM 1 ITEM AJ O OUTRO VAZIO.
const fnAuxFeatExistOK = async (m: ArgExistClienteFisico) => {
  // ESTE METODO REFLETE A IMPLEMENATCAO DO SUT REAL <featExistClienteFisico>
  const operation = await repositoryMockOK?.exist(m);
  if (typeof operation == "undefined") {
    // Log('nao existe - entao retorno o dado enviado de  entrada')
    return await m;
  } else {
    // Log('ja existe - entao retorno em erro uma excessao')
    throw new Error(feedbacksGlobal.alreadyExists);
  }
};

const fnAuxFeatExistFAIL = async (m: ArgExistClienteFisico) => {
  // ESTE METODO REFLETE A IMPLEMENATCAO DO SUT REAL <featExistClienteFisico>
  const operation = await repositoryMockFAIL?.exist(m);
  if (typeof operation == "undefined") {
    // Log('nao existe - entao retorno o dado enviado de  entrada')
    return await m;
  } else {
    // Log('ja existe - entao retorno em erro uma excessao')
    throw new Error(feedbacksGlobal.alreadyExists);
  }
};

const featExistClienteFisicoMockOK = async (m: ArgExistClienteFisico) => {
  return await fnAuxFeatExistOK(m);
};

const featExistClienteFisicoMockFAIL = async (m: ArgExistClienteFisico) => {
  await fnAuxFeatExistFAIL(m);
};

const sutOK = featExistClienteFisicoMockOK;
const sutFAIL = featExistClienteFisicoMockFAIL;

const tratExcessaoController = async () => {
  // FAZ O PAPEL DO CONTROLE - CAPTURA O ERRO COM :: TRY/CATCH
  try {
    return await sutFAIL(inputWithoutIDMockFAIL.ID);
  } catch (err: any) {
    return err.message;
  }
};

Deno.test({
  name:
    "deve retornar o argumento passado, para seguir o fluxo do pipe >> porque deu TRUE o item nao existe ainda",
  only: false,
  async fn() {
    // test
    const input = inputWithIDMockOK.ID;
    const where = await sutOK(input);
    // Log("RETORNE O ARG  >> ", where);
    expect(where).toEqual(input);
  },
});

Deno.test({
  name:
    "deve retornar o feedback correto de excessao - porque ja existe o item na colecao",
  only: false,
  async fn() {
    const where = await tratExcessaoController();
    const feedbackFAIL = feedbacksGlobal.alreadyExists;
    // Log("RETORNE falha WHERE >> ", where);
    expect(where).toEqual(feedbackFAIL);
  },
});

/* TESTER_CONSOLE ************************************* */

async function show_OK() {
  const res = await sutOK(inputWithIDMockOK);
  Log("AQUI OK ESTA RETORNANDO O ARGUMENTO >> ", res);
  return res;
}
// show_OK();

async function show_FAIL() {
  // FAZ O PAPEL DO CONTROLE - CAPTURA O ERRO COM :: TRY/CATCH
  return await tratExcessaoController();
}
// viewConsole excessaoPromessa do Erro FAIL
// show_FAIL().then((d) => Log(d));

export default 1;
