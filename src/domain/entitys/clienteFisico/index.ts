// INDEX ALL_IMPORTS ENTITY

// CONTRACTS
export * from "@/domain/entitys/clienteFisico/uniques/contracts/clienteFisico/contracts.ts";

// CONTROLLER
export * from "@/domain/entitys/clienteFisico/gateways/controllers/create/controller.ts";

// FEATURES CREATE ARGS
export * from "@/domain/entitys/clienteFisico/features/create/args/validateArgs.ts";
export * from "@/domain/entitys/clienteFisico/features/create/args/save.ts";
export * from "@/domain/entitys/clienteFisico/features/create/args/exist/exist.ts";
export * from "@/domain/entitys/clienteFisico/features/create/args/factory/factory.ts";
export * from "@/domain/entitys/clienteFisico/features/create/args/prepare.ts";

// UNIQUES
export * from "@/domain/entitys/clienteFisico/uniques/seed/seeds.ts";
export * from "@/domain/entitys/clienteFisico/uniques/fakes/fakes.ts";
export * from "@/domain/entitys/clienteFisico/uniques/mediator/mediator.ts";

// EXTERNALS >> REPOSITORY PRODUCTION
export * from "@/domain/entitys/clienteFisico/external/repositoryEntityProduction/repositoryProduction.ts";

// PIPE ARGS - CREATE
export * from "@/domain/entitys/clienteFisico/usecases/create/create.ts";

// /* *************************************************** */

/*
todo estes fora do modulo esta dando problema de inicializacao:
falha de top level: nivelSuperior :

traducao da falha:
Este erro não foi detectado em um teste e fez com que o executor de teste falhasse no módulo referenciado.
Provavelmente se originou de uma promessa pendente, manipulador de evento/tempo limite ou código de nível superior

---
This error was not caught from a test and caused the test runner to fail on the referenced module.
It most likely originated from a dangling promise, event/timeout handler or top-level code
*/
