
abstract class BaseEntityPerson<T> {
  public readonly args: T
  // protected ID: string

  constructor(args: T, ID: string) {
    this.args = args
    // this.ID = ID ?? '1' // TODO INSERIR UM GERADOR DE HASH PARA ID
  }
}

export { BaseEntityPerson }