/** *
 *  ROOT_MASTER_DEPS_ALL_APP
 *
 *  REGISTRE E DEPOIS RECUPERE TODOS ARTEFATOS DO MODULO AQUI.
 * manutencaoMudancas: [
  [x] se mudar de pasta >> dará manutencao somente nos arquivos entidadeDeps referente -usando o mapeamento import_map.json
  [x] se nao usar o mapeamento import_map.json a manutencao em troca de apsta sera nos arquivos entidadeDeps e no arquivo fonteMudado que mandou sua referencia para o ROOT_MASTER_DEPS_ALL_APP
 ],
 */

/* 1- externals *************************************************** */
export * from "./externalsLibsRZDeps.ts";
/* finally - externals *************************************************** */

/* 2- All Entitys*************************************************** */
export * from "./clienteFisicoDeps.ts";

/* finally - All Entitys*************************************************** */

/* 3- helpers global entitys *************************************************** */
export * from "./../../src/domain/helpers/feedbacks/feedbacks.ts";
export * from "./../../src/domain/helpers/httpResponse/httpResponse.ts";
/* finally - helpers global entitys *************************************************** */
