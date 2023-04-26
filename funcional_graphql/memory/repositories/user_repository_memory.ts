import {
  UserModel,
  UserRepository,
} from "../../src/domain/type_entitys/participant/user/editables/contracts.ts";

export const userRepositoryMemory: UserRepository = {
  _items: [],

  create(u: UserModel) {
    this._items?.push(u);
    return u;
  },

  list() {
    return this._items!;
  },
};
