export type UserModel = UserArgs & AddPropsUser;

export interface UserArgs {
  primeiroNome: string;
  texto: string;
  numeroInteiro: number;
}

export type AddPropsUser = {
  // novas props add aqui
};

export interface FakeUser {
  args1: UserArgs;
  args2: UserArgs;
}

export interface UserRepository {
  _items?: UserModel[];
  create: (u: UserModel) => UserModel;
  list: () => UserModel[];
}
