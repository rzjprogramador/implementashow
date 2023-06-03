// deno-lint-ignore-file no-unused-vars
import {
  ClienteFisicoModel,
  ClienteFisicoRepository,
} from "../../../../../../topLevel/deps/_deps.deps.ts";

const clienteFisicoRepositoryProduction: ClienteFisicoRepository = {
  items: [],

  async create(m: ClienteFisicoModel) {
    await this?.items?.push(m);
    return await m;
  },

  async exist(m) {
    return await this?.items?.find((m) => m?.ID === m.ID);
  },
};

export { clienteFisicoRepositoryProduction };
