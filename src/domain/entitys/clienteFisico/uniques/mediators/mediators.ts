import {
  clienteFisicoRepositoryProduction,
  IClienteFisicoRepository,
} from "@clienteFisico";

interface IMediatorRepositoryClienteFisico {
  create: IClienteFisicoRepository;
  exist: IClienteFisicoRepository;
}

const mediatorRepositoryClienteFisico: IMediatorRepositoryClienteFisico = {
  create: clienteFisicoRepositoryProduction,
  exist: clienteFisicoRepositoryProduction,
};

export { mediatorRepositoryClienteFisico };

/*
 * 1x1 com useCases.
 */
