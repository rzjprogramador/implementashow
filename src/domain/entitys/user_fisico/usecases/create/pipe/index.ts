// deno-lint-ignore-file no-explicit-any ban-types
import { UserFisicoArgs } from "../../../contracts.ts";
import { generatorProtoUserFisico } from "./generatorPrototype.ts";
import { prepareCreateUserFisico } from "./prepare.ts";

const listCreateUserFisico = [
  generatorProtoUserFisico,
  prepareCreateUserFisico,
];

export const pipeCreateUserFisico = (a: UserFisicoArgs) =>
  listCreateUserFisico.reduce((acc: any, fn: Function) => fn(acc), a);

/*
* na lista deixar o prepare por ultimo na lista porque ja retorna o model completo..enquanto os primeiros retornam os args

*
*/
