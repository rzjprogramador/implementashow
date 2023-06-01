interface FeedbackGlobal {
  createOk: string;
  alreadyExists: string;
}

const feedbacksGlobal: FeedbackGlobal = {
  createOk: "criado com sucesso",
  alreadyExists: `Ops... ja cadastrado!`,
};

export { feedbacksGlobal };
