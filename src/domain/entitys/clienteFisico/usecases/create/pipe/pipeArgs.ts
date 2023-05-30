// deno-lint-ignore-file no-explicit-any ban-types
import { ClienteFisicoArgs } from "@clienteFisico";
import { newClienteFisicoFactory } from "@clienteFisico";
import { prepareCreateClienteFisico } from "@clienteFisico";

const listFeatCreateClienteFisico = [
  newClienteFisicoFactory,
  prepareCreateClienteFisico,
];

const pipeArgsCreateClienteFisico = (a: ClienteFisicoArgs) =>
  listFeatCreateClienteFisico.reduce((acc: any, fn: Function) => fn(acc), a);

export { pipeArgsCreateClienteFisico };
