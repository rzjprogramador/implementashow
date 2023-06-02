/**
 * DEPS ENTITY >> clienteFisico >> puxar todos subDeps
 */

// testar aqui extra deps direto
export * from "./useCases/create/features/factory.ts"
export * from "./useCases/create/features/members.ts";
export * from "./useCases/create/features/exist.ts";
export * from "./useCases/create/features/prepare.ts";
export * from "./useCases/create/features/save.ts";
export * from "./useCases/create/features/validateArgs.ts";

// master pipeArgs
export * from "./useCases/create/indexPipe.ts"

// ---

export * from "./uniques/subDeps.deps.ts";
export * from "./controllers/subDeps.deps.ts";
export * from "./externalsForEntity/subDeps.deps.ts";

// export * from "./useCases/subDeps.deps.ts";
