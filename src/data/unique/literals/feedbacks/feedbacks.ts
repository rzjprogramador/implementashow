
interface Feedbacks {
  createOk: string
  createUserFisicoOk: () => string
}

export const feedbacks: Feedbacks = {
  createOk: 'criado com sucesso',

  createUserFisicoOk() {
    return `Usuario Fisico ${this.createOk}`
  }
}