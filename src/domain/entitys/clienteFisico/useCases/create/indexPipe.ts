// deno-lint-ignore-file no-explicit-any ban-types
import { ClienteFisicoArgs } from "@contractsClienteFisico";
import {
  newClienteFisicoFactory,
} from "@featuresArgsCreateClienteFisico/args/factory/factory.ts";
import {
  prepareCreateClienteFisico,
} from "@featuresArgsCreateClienteFisico/args/prepare.ts";

const listFeatCreateClienteFisico = [
  newClienteFisicoFactory,
  prepareCreateClienteFisico,
];

const pipeArgsCreateClienteFisico = (a: ClienteFisicoArgs) =>
  listFeatCreateClienteFisico.reduce((acc: any, fn: Function) => fn(acc), a);

export { pipeArgsCreateClienteFisico };
