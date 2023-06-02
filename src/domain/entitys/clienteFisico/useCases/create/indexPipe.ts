// deno-lint-ignore-file no-explicit-any ban-types
import {
  ClienteFisicoArgs,
} from "../../../clienteFisico/deps.ts";
import { prepareCreateClienteFisico } from "../subDeps.ts";
import { newClienteFisicoFactory } from "./features/factory.ts";


const listFeatCreateClienteFisico = [
  newClienteFisicoFactory,
  prepareCreateClienteFisico,
];

const pipeArgsCreateClienteFisico = (a: ClienteFisicoArgs) =>
  listFeatCreateClienteFisico.reduce((acc: any, fn: Function) => fn(acc), a);

export { pipeArgsCreateClienteFisico };
