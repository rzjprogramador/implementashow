import { ClienteFisicoRepository } from "@contractsClienteFisico";
import { clienteFisicoRepositoryProduction } from "@repoClienteFisico";

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
