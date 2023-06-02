import { clienteFisicoRepositoryProduction } from "../../externalsForEntity/subDeps.ts";
import { ClienteFisicoRepository } from "../../deps.ts";

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
