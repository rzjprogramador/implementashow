// deno-lint-ignore-file no-explicit-any ban-types
import { ClienteFisicoArgs } from "../../../contracts.ts";
import { newClienteFisicoFactory } from "../features/factory/factory.ts";
import { prepareCreateClienteFisico } from "../features/prepare.ts";

const listFeatCreateClienteFisico = [
  newClienteFisicoFactory,
  prepareCreateClienteFisico,
];

const pipeArgsCreateClienteFisico = (a: ClienteFisicoArgs) =>
  listFeatCreateClienteFisico.reduce((acc: any, fn: Function) => fn(acc), a);


export { pipeArgsCreateClienteFisico }

/*
* na lista deixar o prepare por ultimo na lista porque ja retorna o model completo..enquanto os primeiros retornam os args

*
*/
