interface IFeedbackGlobal {
  createOk: string;
  alreadyExists: string;
}

const feedbacksGlobal: IFeedbackGlobal = {
  createOk: "criado com sucesso",
  alreadyExists: `Ops... ja cadastrado!`,
};

export { feedbacksGlobal };
