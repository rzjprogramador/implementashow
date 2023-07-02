// FONTE UNICA DESTA ENTIDADE

/* puxar tudo das replicas remotas -> para ser usado na entidade. */
export * from '../../../../_roots/deps/replicas.remote.deps.ts'

// replicasRemote: helpers
export * from '../../../../_roots/deps/replicas.local.deps.ts'

/* re-exportar artefatos da entidade -- Ond eprecisarem de artefatos desta entidade -> buscaram aqui a importacao. */
export * from './_factory/factory.ts'
export * from './types.ts'

export * from './../uniques/fakes/fakes.ts'

// -- UseCases --
// export * from '../usecases/create/create.ts'