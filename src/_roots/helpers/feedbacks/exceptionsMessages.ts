
interface FeedbackException {
  cause: string
  toCorrect: string
}

class ExceptionsMessages {

  static feedbackExistID(): FeedbackException {
    return {
      cause: `Já contém um registro ID, não pode recriar a entidade.`,
      toCorrect: `Faça outra operação`,
    }
  }

}

export {
  ExceptionsMessages,
  type FeedbackException
 }

