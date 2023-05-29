import {
  ClienteFisicoModel,
  ClienteFisicoRepository,
} from "../../../../domain/entitys/clienteFisico/contracts.ts";
import { seedClienteFisico } from "../seed/seed.ts";

const clienteFisicoRepositoryMock: Partial<ClienteFisicoRepository> = {
  items: [],

  async create(m: ClienteFisicoModel) {
    await this?.items?.push(m);
    return await m;
  },

  async exist(m) {
    if (m.ID == undefined) {
      return undefined;
    }
    const where = await this?.items?.find((m) => m?.ID === m.ID);
    return await where;
  },
};

const clienteFisicoRepositoryMockWithOneSeed: Partial<ClienteFisicoRepository> =
  {
    items: [seedClienteFisico.one],

    async exist(m) {
      if (m.ID == undefined) {
        return undefined;
      }
      const where = await this?.items?.find((m) => m?.ID === m.ID);
      return await where;
    },
  };

export { clienteFisicoRepositoryMock, clienteFisicoRepositoryMockWithOneSeed };
