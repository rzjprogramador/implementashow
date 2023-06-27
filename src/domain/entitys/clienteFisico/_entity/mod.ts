// FONTE UNICA DESTA ENTIDADE

/* puxar tudo das replicas remotas -> para ser usado na entidade. */
export * from '../../../../_roots/deps/depsRemote/replicas.deps.ts'

/* re-exportar artefatos da entidade -- Ond eprecisarem de artefatos desta entidade -> buscaram aqui a importacao. */
export * from './entity.ts'
export * from './types.ts'
export * from './members.ts'

export * from '../uniques/fakes/fakes.ts'