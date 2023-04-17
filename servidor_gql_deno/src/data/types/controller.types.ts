interface TypeObj1Model {
  texto: string;
  numero: number;
}

type TypePrimitivo1 = string;

const showTypePrimitivo1 = (): TypePrimitivo1 => {
  return `Hello Word.. este é um primitivo texto.`;
};

const showTypeObj1 = (): TypeObj1Model => {
  return {
    texto: "reinaldo",
    numero: 10,
  };
};

export { showTypeObj1, showTypePrimitivo1 };
