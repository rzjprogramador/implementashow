// deno-lint-ignore-file no-explicit-any ban-types
import {
  ClienteFisicoArgs,
  newClienteFisicoFactory,
  prepareCreateClienteFisico,
} from "../../clienteFisico.deps.ts";

const listFeatCreateClienteFisico = [
  newClienteFisicoFactory,
  prepareCreateClienteFisico,
];

const pipeArgsCreateClienteFisico = (a: ClienteFisicoArgs) =>
  listFeatCreateClienteFisico.reduce((acc: any, fn: Function) => fn(acc), a);

export { pipeArgsCreateClienteFisico };
