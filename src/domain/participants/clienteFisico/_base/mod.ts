// -- FONTE UNICA DA ENTIDADE ->
// -- REGISTRO DE TODOS ARTEFATOS DESTA ENTIDADE --

// -- Types --
export * from './types.ts'

// -- Factory --
export * from '../factory/factory.ts'
export * from '../factory/members.ts'

// -- Literals --
export * from '../literals/fakes/fake.ts'
export * from '../literals/seeds/seeds.ts'


// -- Sets --
export * from '../literals/sets/sets.ts'

// -- Repositorios --
export * from '../remotes/repository/firebase.repositoryClienteFisico.ts'
export * from '../remotes/repository/memory.repositoryClienteFisico.ts'
export * from '../literals/mediator/mediator.repository.ts'

// -- PreArgs --
export * from '../usecases/create/preFeaturesCreate/checkArgs.ts'

// -- UseCases CreatePipe--
export * from '../usecases/create/create.pipe.ts'

// -- UseCases - create main --
export * from '../usecases/create/create.pipe.ts'

// -- Controller --
export * from '../controller/create/create.controller.ts'
