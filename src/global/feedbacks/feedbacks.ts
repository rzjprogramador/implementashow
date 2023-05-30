interface Feedbacks {
  createOk: string
  alreadyExists: string
  createClienteFisicoOk: () => string
}

export const feedbacks: Feedbacks = {
  createOk: 'criado com sucesso',
  alreadyExists: `Ops... ja cadastrado!`,

  createClienteFisicoOk() {
    return `Usuario Fisico ${this.createOk}`
  },
}
