import {
  seedClienteFisicoONE, seedClienteFisicoTWO,
  type ClienteFisicoRepository,
} from '@clienteFisico'



const MemoryRepositoryClienteFisico: ClienteFisicoRepository = {
  _items: [seedClienteFisicoONE, seedClienteFisicoTWO],

  exist(ID: string): boolean {
    const target = this._items?.find((i) => i.ID == ID)
    return !!target
  }
}

export { MemoryRepositoryClienteFisico }