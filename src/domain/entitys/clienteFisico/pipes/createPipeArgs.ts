// deno-lint-ignore-file no-explicit-any ban-types
import { ClienteFisicoArgs } from "@clienteFisicoContracts";
import { newClienteFisicoFactory } from "../features/create/args/factory/factory.ts";
import { prepareCreateClienteFisico } from "../features/create/args/prepare.ts";

const listFeatCreateClienteFisico = [
  newClienteFisicoFactory,
  prepareCreateClienteFisico,
];

const pipeArgsCreateClienteFisico = (a: ClienteFisicoArgs) =>
  listFeatCreateClienteFisico.reduce((acc: any, fn: Function) => fn(acc), a);

export { pipeArgsCreateClienteFisico };
