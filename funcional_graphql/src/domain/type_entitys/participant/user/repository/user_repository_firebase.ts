import { UserModel, UserRepository } from "../editables/contracts.ts";

export const userRepositoryFirebase: UserRepository = {
  _items: [],

  create(u: UserModel) {
    this._items?.push(u);
    return u;
  },

  list() {
    return this._items!;
  },
};
