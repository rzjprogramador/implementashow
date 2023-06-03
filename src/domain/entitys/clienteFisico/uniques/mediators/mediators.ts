import { clienteFisicoRepositoryProduction, ClienteFisicoRepository } from "../../clienteFisico.deps.ts";

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
