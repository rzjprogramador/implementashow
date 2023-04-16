import {
  TypeO1Model,
  TypeO1Repository,
} from "../create/editables/contract/contracts.typeO1.ts";

const repositoryTypeO1Tester: TypeO1Repository = {
  _items: [],

  create(d: TypeO1Model): TypeO1Model {
    const input = d;
    this._items?.push(input);
    return input;
  },

  list(): TypeO1Model[] {
    return this._items!;
  },
};

export { repositoryTypeO1Tester };
