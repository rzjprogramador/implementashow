interface FeedbackGlobal {
  createOk: string;
  alreadyExists: string;
}

const feedbackGlobal: FeedbackGlobal = {
  createOk: "criado com sucesso",
  alreadyExists: `Ops... ja cadastrado!`,

};

export { feedbackGlobal }
