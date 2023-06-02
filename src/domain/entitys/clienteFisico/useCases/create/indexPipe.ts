// deno-lint-ignore-file no-explicit-any ban-types
import {
  ClienteFisicoArgs,
} from "../../../clienteFisico/deps.deps.ts";
import { newClienteFisicoFactory, prepareCreateClienteFisico } from "../../deps.deps.ts";
// import { prepareCreateClienteFisico } from "../../deps.deps.ts";


const listFeatCreateClienteFisico = [
  newClienteFisicoFactory,
  prepareCreateClienteFisico,
];

const pipeArgsCreateClienteFisico = (a: ClienteFisicoArgs) =>
  listFeatCreateClienteFisico.reduce((acc: any, fn: Function) => fn(acc), a);

export { pipeArgsCreateClienteFisico };
