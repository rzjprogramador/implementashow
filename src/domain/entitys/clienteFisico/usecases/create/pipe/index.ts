// deno-lint-ignore-file no-explicit-any ban-types
import { ClienteFisicoArgs } from "../../../contracts.ts";
import { createNewClienteFisicoFactory } from "../factory/generatorPrototype.ts";
import { prepareCreateClienteFisico } from "../features/prepare.ts";

const listCreateClienteFisico = [
  createNewClienteFisicoFactory,
  prepareCreateClienteFisico,
];

export const pipeCreateClienteFisico = (a: ClienteFisicoArgs) =>
  listCreateClienteFisico.reduce((acc: any, fn: Function) => fn(acc), a);

/*
* na lista deixar o prepare por ultimo na lista porque ja retorna o model completo..enquanto os primeiros retornam os args

*
*/
