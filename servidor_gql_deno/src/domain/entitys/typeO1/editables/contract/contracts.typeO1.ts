type TypeResposta1 = ArgsResposta1;

interface ArgsResposta1 {
  texto: string;
}

interface RepositoryResposta1 {
  _items?: TypeResposta1[];
  create: (d: TypeResposta1) => TypeResposta1;
  list: () => TypeResposta1[];
}

type ControllerTypeResposta1 = TypeResposta1;

export type {
  ArgsResposta1,
  ControllerTypeResposta1,
  RepositoryResposta1,
  TypeResposta1,
};
