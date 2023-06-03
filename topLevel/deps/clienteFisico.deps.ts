/**
 * EXCLUSIVE
 * registros: registre aqui todos artefatos da entidade referente.
 * importante import tudo deste arquivo para o _depsMaster
 */

/* Entity >> clienteFisico */

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

// controller
export * from "./../../src/domain/entitys/clienteFisico/controllers/create/controller.ts";

// uniques
export * from "./../../src/domain/entitys/clienteFisico/uniques/fakes/fakes.ts"; // fake
// export * from "../../foo/fakes/fakes.ts"; // fake
export * from "./../../src/domain/entitys/clienteFisico/uniques/feedbacks/feedbacks.ts";
export * from "./../../src/domain/entitys/clienteFisico/uniques/mediators/mediators.ts";
export * from "./../../src/domain/entitys/clienteFisico/uniques/seeds/seeds.ts";

export * from "./../../src/domain/entitys/clienteFisico/uniques/contracts/contracts.ts"; // contracts
