import { ClienteFisicoModel, ClienteFisicoRepository } from '../../../domain/entitys/clienteFisico/contracts.ts'

export const clienteFisicoRepositoryProduction: ClienteFisicoRepository = {
  items: [],

  async create(m: ClienteFisicoModel) {
    await this?.items?.push(m)
    return await m
  },
}
