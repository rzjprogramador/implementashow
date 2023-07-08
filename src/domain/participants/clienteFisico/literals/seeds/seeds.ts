import { ClienteFisicoModel, fakeBaseOkArgsClienteFisicoONE, fakeBaseOkArgsClienteFisicoTWO } from "@clienteFisico"

const seedClienteFisicoONE: ClienteFisicoModel = {
  ...fakeBaseOkArgsClienteFisicoONE,
  ID: '1',
}

const seedClienteFisicoTWO: ClienteFisicoModel = {
  ...fakeBaseOkArgsClienteFisicoTWO,
  ID: '2',
}

export { seedClienteFisicoONE, seedClienteFisicoTWO }