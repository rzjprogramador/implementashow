/** *
 *  DEPS ENTITY
 *  REGISTRE E DEPOIS RECUPERE TODOS ARTEFATOS DO MODULO AQUI.
 * manutencaoMudancas: [
  [x] se mudar de pasta >> manutencao somente aqui ou no deps da entidade
  [x] todo: esta dando manutencao em um arquivo extra , quando muda de pasta um artefato
 ],
 */

/* 1- externals *************************************************** */
export * from "./../../src/externals/modules/rzModulesTS.ts";
/* finally - externals *************************************************** */

/* 2- All Entitys*************************************************** */
export * from "./clienteFisico.deps.ts";

/* finally - All Entitys*************************************************** */

/* 3- helpers global entitys *************************************************** */
export * from "./../../src/domain/helpers/feedbacks/feedbacks.ts";
export * from "./../../src/domain/helpers/httpResponse/httpResponse.ts";
/* finally - helpers global entitys *************************************************** */
