const resolversRoot = {
  Query: {
    respostaTypePrimitivo1: () => {
      return `Hello Word.. este é um primitivo texto.`;
    },

    respostaTypeObj1: () => {
      return {
        texto: "reinaldo",
        numero: 10,
      };
    },
  },
};

export { resolversRoot };
