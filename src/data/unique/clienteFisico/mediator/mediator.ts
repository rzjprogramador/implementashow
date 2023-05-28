import { ClienteFisicoRepository } from "../../../../domain/entitys/clienteFisico/contracts.ts";
import { clienteFisicoRepositoryProduction } from "../../../../frameworks/repository/clienteFisico/repository.ts";

interface MediatorRepositoryClienteFisico {
  create: ClienteFisicoRepository;
  exist: ClienteFisicoRepository;
}

const mediatorRepositoryClienteFisico:
  MediatorRepositoryClienteFisico = {
    create: clienteFisicoRepositoryProduction,
    exist: clienteFisicoRepositoryProduction,
};

export { mediatorRepositoryClienteFisico }
/*
 * 1x1 com useCases.
 */
