import { RepositoryResposta1, TypeResposta1 } from "../editables/resposta1.contracts.ts";

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
