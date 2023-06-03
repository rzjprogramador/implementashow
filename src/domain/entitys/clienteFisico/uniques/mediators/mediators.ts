import {
  ClienteFisicoRepository,
  clienteFisicoRepositoryProduction,
} from "../../../../../../topLevel/deps/_rootDeps.deps.ts";

interface MediatorRepositoryClienteFisico {
  create: ClienteFisicoRepository;
  exist: ClienteFisicoRepository;
}

const mediatorRepositoryClienteFisico: MediatorRepositoryClienteFisico = {
  create: clienteFisicoRepositoryProduction,
  exist: clienteFisicoRepositoryProduction,
};

export { mediatorRepositoryClienteFisico };

/*
 * 1x1 com useCases.
 */
