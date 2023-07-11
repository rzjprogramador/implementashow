// -- Base abstrata para todas entidades person --

abstract class BaseEntityPerson<T> {
  public readonly args: T
  protected ID: string

  constructor(args: T, ID: string) {
    this.args = args
    this.ID = ID ?? Date.now().toString()
    // TODO INSERIR UM GERADOR DE HASH PARA ID
  }
}

export { BaseEntityPerson }