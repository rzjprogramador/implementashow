type TypeO1Model = ArgsTypeO1;

interface ArgsTypeO1 {
  texto: string;
}

interface TypeO1Repository {
  _items?: TypeO1Model[];
  create: (d: TypeO1Model) => TypeO1Model;
  list: () => TypeO1Model[];
}

type TypeO1Controller = TypeO1Model;

export type { ArgsTypeO1, TypeO1Controller, TypeO1Model, TypeO1Repository };
