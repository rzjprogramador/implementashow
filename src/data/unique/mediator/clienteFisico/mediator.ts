import { ClienteFisicoRepository } from "../../../../domain/entitys/clienteFisico/contracts.ts";
import { clienteFisicoRepositoryProduction } from "../../../../frameworks/repository/clienteFisico/repository.ts";

interface MediatorRepositoryClienteFisico {
  create: ClienteFisicoRepository;
}

export const mediatorRepositoryClienteFisico:
  MediatorRepositoryClienteFisico = {
    create: clienteFisicoRepositoryProduction,
  };

/*
 * 1x1 com useCases.
 */
