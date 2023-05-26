import { ClienteFisicoRepository } from "../../../../domain/entitys/clienteFisico/contracts.ts"
import { clienteFisicoRepositoryProduction } from "../../../../frameworks/repository/clienteFisico/repository.ts"

interface ClienteFisicoControllerAppRepository {
  create: ClienteFisicoRepository
}

export const clienteFisicoControllerAppRepository: ClienteFisicoControllerAppRepository = {
  create: clienteFisicoRepositoryProduction,
}

/*
 * 1x1 com useCases
 */
