import { RepositoryResposta1, TypeResposta1 } from "../editables/contract/contracts.typeO1.ts";

const repositoryResposta1Tester: RepositoryResposta1 = {
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

export { repositoryResposta1Tester };
