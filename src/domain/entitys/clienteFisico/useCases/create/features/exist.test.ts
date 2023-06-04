// deno-lint-ignore-file no-unused-vars no-explicit-any
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import {
  IArgExistClienteFisico,
  IClienteFisicoModel,
  seedClienteFisico,
} from "@clienteFisico";
import { feedbacksGlobal } from "@global";
import { mkeLog } from "@externals";

const inputWithIDMockOK: Partial<IClienteFisicoModel> = {
  primeiroNome: seedClienteFisico.one.primeiroNome,
  sobrenome: seedClienteFisico.one.sobrenome,
  // O INPUT OK >>  NAO TEM ID
};

const inputWithoutIDMockFAIL: Partial<IClienteFisicoModel> = {
  ID: seedClienteFisico?.one,
  primeiroNome: seedClienteFisico.one.primeiroNome,
  sobrenome: seedClienteFisico.one.sobrenome,
  // O INPUT FAIL >> TEM ID
};

const repositoryMockOK = {
  items: [],
  async exist(m: Partial<IClienteFisicoModel>) {
    return await this?.items?.find((m: Partial<IClienteFisicoModel>) =>
      m.ID === m.ID
    );
  },
};

const repositoryMockFAIL = {
  items: [inputWithIDMockOK],
  async exist(m: Partial<IClienteFisicoModel>) {
    return await this?.items?.find((m: Partial<IClienteFisicoModel>) =>
      m?.ID === m.ID
    );
  },
};

// NESTES 2 FEAT MOCKADOS ESTOU MUDANDO SOMENTE O REPO ONDE SALVAM - 1 COM 1 ITEM AJ O OUTRO VAZIO.
const fnAuxFeatExistOK = async (m: IArgExistClienteFisico) => {
  // ESTE METODO REFLETE A IMPLEMENATCAO DO SUT REAL <featExistClienteFisico>
  const operation = await repositoryMockOK?.exist(m);
  if (typeof operation == "undefined") {
    // mkeLog('nao existe - entao retorno o dado enviado de  entrada')
    return await m;
  } else {
    // mkeLog('ja existe - entao retorno em erro uma excessao')
    throw new Error(feedbacksGlobal.alreadyExists);
  }
};

const fnAuxFeatExistFAIL = async (m: IArgExistClienteFisico) => {
  // ESTE METODO REFLETE A IMPLEMENATCAO DO SUT REAL <featExistClienteFisico>
  const operation = await repositoryMockFAIL?.exist(m);
  if (typeof operation == "undefined") {
    // mkeLog('nao existe - entao retorno o dado enviado de  entrada')
    return await m;
  } else {
    // mkeLog('ja existe - entao retorno em erro uma excessao')
    throw new Error(feedbacksGlobal.alreadyExists);
  }
};

const featExistClienteFisicoMockOK = async (m: IArgExistClienteFisico) => {
  return await fnAuxFeatExistOK(m);
};

const featExistClienteFisicoMockFAIL = async (m: IArgExistClienteFisico) => {
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
    // mkeLog("RETORNE O ARG  >> ", where);
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
    // mkeLog("RETORNE falha WHERE >> ", where);
    expect(where).toEqual(feedbackFAIL);
  },
});

/* TESTER_CONSOLE ************************************* */

async function show_OK() {
  const res = await sutOK(inputWithIDMockOK);
  mkeLog("AQUI OK ESTA RETORNANDO O ARGUMENTO >> ", res);
  return res;
}
// show_OK();

async function show_FAIL() {
  // FAZ O PAPEL DO CONTROLE - CAPTURA O ERRO COM :: TRY/CATCH
  return await tratExcessaoController();
}
// viewConsole excessaoPromessa do Erro FAIL
// show_FAIL().then((d) => mkeLog(d));

export default 1;
