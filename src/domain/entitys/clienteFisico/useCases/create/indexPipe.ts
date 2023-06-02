// deno-lint-ignore-file no-explicit-any ban-types
import {
  ClienteFisicoArgs,
} from "../../../clienteFisico/deps.deps.ts";
import { prepareCreateClienteFisico } from "../subDeps.deps.ts";
import { newClienteFisicoFactory } from "./extraDeps.deps.ts";


const listFeatCreateClienteFisico = [
  newClienteFisicoFactory,
  prepareCreateClienteFisico,
];

const pipeArgsCreateClienteFisico = (a: ClienteFisicoArgs) =>
  listFeatCreateClienteFisico.reduce((acc: any, fn: Function) => fn(acc), a);

export { pipeArgsCreateClienteFisico };
