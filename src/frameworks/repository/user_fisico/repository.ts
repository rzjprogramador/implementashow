import { UserFisicoModel, UserFisicoRepository } from "../../../domain/entitys/user_fisico/contracts.ts";


export const userFisicoRepositoryProduction: UserFisicoRepository = {
  items: [],

  async create(m: UserFisicoModel) {
    await this?.items?.push(m);
    return await m;
  },
};