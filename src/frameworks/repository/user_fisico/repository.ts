import { UserFisicoModel, UserFisicoRepository } from "../../../domain/entitys/clienteFisico/contracts.ts";


export const userFisicoRepositoryProduction: UserFisicoRepository = {
  items: [],

  async create(m: UserFisicoModel) {
    await this?.items?.push(m);
    return await m;
  },
};