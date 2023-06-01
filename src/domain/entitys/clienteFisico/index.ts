// INDEX ALL_IMPORTS ENTITY

// CONTRACTS
export * from "@/domain/_utils/uniques/contracts/clienteFisico/contracts.ts";

// CONTROLLER
export * from "@/gateways/controllers/clienteFisico/create/controller.ts";

export * from "@/domain/entitys/clienteFisico/usecases/create/features/validateArgs.ts";

// FEATURES
export * from "@/domain/entitys/clienteFisico/usecases/create/features/save.ts";
export * from "@/domain/entitys/clienteFisico/usecases/create/features/exist/exist.ts";
export * from "@/domain/entitys/clienteFisico/usecases/create/features/factory/factory.ts";
export * from "@/domain/entitys/clienteFisico/usecases/create/features/prepare.ts";

/*
todo estes fora do modulo esta dando problema d einicializacao:
falha de top level: nivelSuperior :

traducao da falha:
Este erro não foi detectado em um teste e fez com que o executor de teste falhasse no módulo referenciado.
Provavelmente se originou de uma promessa pendente, manipulador de evento/tempo limite ou código de nível superior

---
This error was not caught from a test and caused the test runner to fail on the referenced module.
It most likely originated from a dangling promise, event/timeout handler or top-level code
*/

// UTILS
export * from "@/domain/_utils/uniques/seed/clienteFisico/seeds.ts";
export * from "../../../../src/domain/_utils/uniques/fakers/clienteFisico/fakers.ts";

// MEDIATOR - REPOSITORY
export * from "@/domain/_utils/uniques/mediator/clienteFisico/mediator.ts";
export * from "@/externals/repository/clienteFisico/repositoryProduction.ts";

// PIPE ARGS
export * from "@/domain/entitys/clienteFisico/usecases/create/pipe/pipeArgs.ts";

// /* *************************************************** */
