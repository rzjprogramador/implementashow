/** *
 *  DEPS ENTITY
 *  REGISTRE E DEPOIS RECUPERE TODOS ARTEFATOS DO MODULO AQUI.
 * manutencaoMudancas: [
  [x] se mudar de pasta >> manutencao somente aqui
  [x] se mudar de pasta >> manutencao somente aqui
 ],
 */


// externals
export * from "./../../src/externals/modules/rzModulesTS.ts";

// clienteFisico
export * from "./../../src/domain/entitys/clienteFisico/uniques/contracts/contracts.ts";

// create - features
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/features/exist.ts";
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/features/factory.ts";
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/features/members.ts";
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/features/prepare.ts";
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/features/save.ts";
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/features/validateArgs.ts";
// masterPipeArgs
export * from "./../../src/domain/entitys/clienteFisico/useCases/create/masterPipeArgs.ts";

// externalsForEntity
export * from "./../../src/domain/entitys/clienteFisico/externalsForEntity/repositoryEntityProduction/repositoryProduction.ts";
export * from "./../../src/domain/entitys/clienteFisico/externalsForEntity/repositoryEntityProduction/repositoryProduction.ts";
export * from "./../../src/domain/entitys/clienteFisico/externalsForEntity/repositoryLoog/repositoryLoog.ts";

// helpers global entitys
export * from "./../../src/domain/helpers/feedbacks/feedbacks.ts";
export * from "./../../src/domain/helpers/httpResponse/httpResponse.ts";

// controller
export * from "./../../src/domain/entitys/clienteFisico/controllers/create/controller.ts";

// uniques

// export * from "./../../src/domain/entitys/clienteFisico/uniques/fakes/fakes.ts" // fake

export * from "../../foo/fakes/fakes.ts"; // fake

export * from "./../../src/domain/entitys/clienteFisico/uniques/feedbacks/feedbacks.ts";
export * from "./../../src/domain/entitys/clienteFisico/uniques/mediators/mediators.ts";
export * from "./../../src/domain/entitys/clienteFisico/uniques/seeds/seeds.ts";
