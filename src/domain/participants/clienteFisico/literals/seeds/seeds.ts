import { setSystem } from '@globalEntitys'
import { ClienteFisicoModel, fakeBaseOkArgsClienteFisicoONE, fakeBaseOkArgsClienteFisicoTWO } from "@clienteFisico"

const seedClienteFisicoONE: ClienteFisicoModel = {
  ...fakeBaseOkArgsClienteFisicoONE,
  ID: setSystem.Strings.one,
}

const seedClienteFisicoTWO: ClienteFisicoModel = {
  ...fakeBaseOkArgsClienteFisicoTWO,
  ID: setSystem.Strings.two,
}

export { seedClienteFisicoONE, seedClienteFisicoTWO }