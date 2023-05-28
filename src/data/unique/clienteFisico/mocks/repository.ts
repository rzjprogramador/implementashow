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
    const exists = await this.items?.find((m) => m?.ID == m.ID!);
    return await exists;
  },
};

const clienteFisicoRepositoryMockWithOneSeed: Partial<ClienteFisicoRepository> = {
  items: [seedClienteFisico.one],

  async exist(m) {
    const exists = await this.items?.find((m) => m?.ID == m.ID!);
    return await exists;
  },
};

export { clienteFisicoRepositoryMock , clienteFisicoRepositoryMockWithOneSeed}
