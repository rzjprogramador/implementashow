// modules_rzj: github modules

export type {
  DatesType,
  IdentifiersType,
  ImportRegistersType,
} from "https://raw.githubusercontent.com/rzjprogramador/modules_typescript/v1.0.1_register_aparticipant/registers_participant/object_use_in_production/registers/registers.ts";

// importando o objeto register
import { importRegisters } from "https://raw.githubusercontent.com/reinaldoreizao/modules_typescript/release/registers_participant/object_use_in_production/registers/registers.ts";

import { objectValuesFN } from "https://raw.githubusercontent.com/rzjprogramador/modules_typescript/release_objectValuesFN/main.ts";

// REPLICANDO POINT_UNIQUE PARA A APP

// replicando o objeto register para uso na app
export const modRegisters = {
  ...importRegisters.identifiers,
  ...importRegisters.dates,
};

export const modObjectsValueFN = objectValuesFN;
