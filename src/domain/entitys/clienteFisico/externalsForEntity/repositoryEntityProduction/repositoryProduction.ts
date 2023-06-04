// deno-lint-ignore-file no-unused-vars
import { IClienteFisicoModel, IClienteFisicoRepository } from "@clienteFisico";

const clienteFisicoRepositoryProduction: IClienteFisicoRepository = {
  items: [],

  async create(m: IClienteFisicoModel) {
    await this?.items?.push(m);
    return await m;
  },

  async exist(m) {
    return await this?.items?.find((m) => m?.ID === m.ID);
  },
};

export { clienteFisicoRepositoryProduction };
