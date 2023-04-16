import { RepositoryResposta1, TypeResposta1 } from "../src/domain/entitys/resposta1/editables/contract/contracts.resposta1.ts";

const repositoryResposta1Memory: RepositoryResposta1 = {
  _items: [],

  create(d: TypeResposta1): TypeResposta1 {
    const input = d;
    this._items?.push(input);
    return input;
  },

  list(): TypeResposta1[] {
    return this._items!;
  },
};

export { repositoryResposta1Memory };
