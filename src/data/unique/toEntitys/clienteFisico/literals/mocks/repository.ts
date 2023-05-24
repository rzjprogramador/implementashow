import { ClienteFisicoModel, ClienteFisicoRepository } from "../../../../../../domain/entitys/clienteFisico/contracts.ts";

export const clienteFisicoRepositoryMock: Partial<ClienteFisicoRepository> = {
  items: [],

  async create(m: ClienteFisicoModel) {
    await this?.items?.push(m);
    return await m;
  },
};