interface Feedbacks {
  createOk: string
  createClienteFisicoOk: () => string
}

export const feedbacks: Feedbacks = {
  createOk: 'criado com sucesso',

  createClienteFisicoOk() {
    return `Usuario Fisico ${this.createOk}`
  },
}
