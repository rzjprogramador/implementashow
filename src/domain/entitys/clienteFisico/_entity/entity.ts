// deno-lint-ignore-file no-explicit-any ban-types
import {
  IClienteFisicoArgs,
  newClienteFisicoFactory,
  prepareCreateClienteFisico,
} from "@clienteFisico";

const listFeatCreateClienteFisico = [
  newClienteFisicoFactory,
  prepareCreateClienteFisico,
];

const pipeArgsCreateClienteFisico = (a: IClienteFisicoArgs) =>
  listFeatCreateClienteFisico.reduce((acc: any, fn: Function) => fn(acc), a);

export { pipeArgsCreateClienteFisico };
