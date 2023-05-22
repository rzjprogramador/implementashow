import { UserFisicoModel, UserFisicoRepository } from "../../../domain/entitys/user_fisico/contracts.ts";

export const userFisicoRepositoryMock: UserFisicoRepository = {
  items: [],

  async create(m: UserFisicoModel) {
    await this?.items?.push(m);
    return await m;
  },
};