import { ClienteFisicoArgs, ClienteFisicoModel } from '../../../contracts.ts'

export const prepareCreateClienteFisico = (a: ClienteFisicoArgs): ClienteFisicoModel => {
  const model: ClienteFisicoModel = { ...a, id: '1' }
  return model
}
