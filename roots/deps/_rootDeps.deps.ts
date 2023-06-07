/** *
 *  ROOT_MASTER_DEPS_ALL_APP
 *
 *  REGISTRE E DEPOIS RECUPERE TODOS ARTEFATOS DO MODULO AQUI.
 * manutencaoMudancas: [
  [x] se mudar de pasta >> dará manutencao somente nos arquivos entidadeDeps referente -usando o mapeamento import_map.json
  [x] se nao usar o mapeamento import_map.json a manutencao em troca de apsta sera nos arquivos entidadeDeps e no arquivo fonteMudado que mandou sua referencia para o ROOT_MASTER_DEPS_ALL_APP
 ],

 como_add_novos_arquivos_Deps: `
 1. primeiro cria o arquivo  -> importa e faz a replica dentro.
 2. importaTudo no _rooDeps
 3. no import_map -> cria a `@variavel` e aponta pro _rootDeps ex: "./roots/deps/_rootDeps.deps.ts"
 `
 */

/* 1- externals *************************************************** */
export * from "./group/replicasExternalDeps.ts";
export * from "./group/externalsRZ_ObjectValues_Deps.ts";
/* finally - externals *************************************************** */

/* 2- All Entitys*************************************************** */
export * from "./group/clienteFisicoDeps.ts";

/* finally - All Entitys*************************************************** */

/* 3- helpers global entitys *************************************************** */
export * from "./../../src/domain/helpers/feedbacks/feedbacks.ts";
export * from "./../../src/domain/helpers/httpResponse/httpResponse.ts";
/* finally - helpers global entitys *************************************************** */
