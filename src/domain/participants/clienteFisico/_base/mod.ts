// -- FONTE UNICA DA ENTIDADE ->
// -- REGISTRO DE TODOS ARTEFATOS DESTA ENTIDADE --

// -- Types --
export * from './types.ts'

// -- Factory --
export * from './_factory/factory.ts'

// -- Literals -> Fake --
export * from '../literals/fakes/fake.ts'

// -- UseCases - Create -- features
export * from '../usecases/create/features/valid.ts'
export * from '../usecases/create/features/createFactory.ts'

// -- important: evitando ReferenceError -> importe-as listFeatures antes do create-pipe para se enxergarem em ordemLogica. --
export * from '../usecases/create/features/_listFeatures.ts'

// -- UseCases CreatePipe--
export * from '../usecases/create/create.pipe.ts'

// -- UseCases - create main --
export * from '../usecases/create/create.pipe.ts'

// -- Controller --
export * from '../controller/create/create.controller.ts'