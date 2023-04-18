// exports_deps : entity: participant1
export { protoParticipant1 } from "./domain/typesmodel/participant1/entity/members.ts";

export type { participant1CoreFN } from "./domain/typesmodel/participant1/editables/contracts.ts";

export type {
  ArgsParticipant1,
  Participant1Model,
} from "./domain/typesmodel/participant1/editables/contracts.ts";

// graphql use imports app

// modules_rzj: github modules
export {
  importRegisters,
} from "https://raw.githubusercontent.com/reinaldoreizao/modules_typescript/release/registers_participant/object_use_in_production/registers/registers.ts";
export type { ImportRegistersType } from "https://raw.githubusercontent.com/reinaldoreizao/modules_typescript/release/registers_participant/object_use_in_production/registers/registers.ts";
