// deno-lint-ignore-file no-explicit-any ban-types
import { ClienteFisicoArgs } from "@contractsClienteFisico";
import { newClienteFisicoFactory } from "../features/factory/factory.ts";
import { prepareCreateClienteFisico } from "../features/prepare.ts";

const listFeatCreateClienteFisico = [
  newClienteFisicoFactory,
  prepareCreateClienteFisico,
];

const pipeArgsCreateClienteFisico = (a: ClienteFisicoArgs) =>
  listFeatCreateClienteFisico.reduce((acc: any, fn: Function) => fn(acc), a);

export { pipeArgsCreateClienteFisico };
