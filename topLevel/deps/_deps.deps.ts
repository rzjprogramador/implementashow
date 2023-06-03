/** *
 *  DEPS ENTITY
 *  REGISTRE E DEPOIS RECUPERE TODOS ARTEFATOS DO MODULO AQUI.
 * importante: ['ordemDeProcedencia do Uso é importante', ]
 * */

// EXTERNALS FOR ENTITY **********************************************
// externals
export * from "./../../src/externals/modules/rzModulesTS.ts";

// clienteFisico
export * from "./../../src/domain/entitys/clienteFisico/uniques/contracts/contracts.ts";

// create - features
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/features/exist.ts"
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/features/factory.ts"
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/features/members.ts"
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/features/prepare.ts"
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/features/save.ts"
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/features/validateArgs.ts"
// masterPipeArgs
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/masterPipeArgs.ts"

// externalsForEntity
export * from "./../../src/domain/entitys/clienteFisico/externalsForEntity/repositoryEntityProduction/repositoryProduction.ts"
export * from "./../../src/domain/entitys/clienteFisico/externalsForEntity/repositoryEntityProduction/repositoryProduction.ts"
export * from "./../../src/domain/entitys/clienteFisico/externalsForEntity/repositoryLoog/repositoryLoog.ts"

// helpers global entitys
export * from "./../../src/domain/helpers/feedbacks/feedbacks.ts"
export * from "./../../src/domain/helpers/httpResponse/httpResponse.ts"


// controller
export * from "./../../src/domain/entitys/clienteFisico/controllers/create/controller.ts"

// uniques
export * from "./../../src/domain/entitys/clienteFisico/uniques/fakes/fakes.ts"
export * from "./../../src/domain/entitys/clienteFisico/uniques/feedbacks/feedbacks.ts"
export * from "./../../src/domain/entitys/clienteFisico/uniques/mediators/mediators.ts"
export * from "./../../src/domain/entitys/clienteFisico/uniques/seeds/seeds.ts"








// externalsForEntity/repositoryEntityProduction/repositoryProduction.ts

/*
export * from "./externalsForEntity/repositoryLoog/repositoryLoog.ts";

// USECASES ************************************************
// CREATE
// FEATURES FACTORY - FOR CREATE ENTITY
export * from "./useCases/create/features/factory.ts";
export * from "./useCases/create/features/members.ts";
export * from "./useCases/create/features/exist.ts";
export * from "./useCases/create/features/prepare.ts";
export * from "./useCases/create/features/save.ts";
export * from "./useCases/create/features/validateArgs.ts";

// MASTER_PIPE_ARGS - CREATE ENTITY
export * from "./useCases/create/masterPipeArgs.ts";
// USECASES FINALLY  ***************************************

// USECASES CONTROLLER **********************************************
export * from "./../clienteFisico/controllers/create/controller.ts";

// DIRETORIES_AUX ENTITY **********************************************
// UNIQUES
export * from "../clienteFisico/uniques/contracts/contracts.ts";
export * from "../clienteFisico/uniques/fakes/fakes.ts";
export * from "../clienteFisico/uniques/feedbacks/feedbacks.ts";
export * from "../clienteFisico/uniques/mediators/mediators.ts";
export * from "../clienteFisico/uniques/seeds/seeds.ts";

*/
