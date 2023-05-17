// modules_rzj: github modules

export type {
  DatesType,
  IdentifiersType,
  ImportRegistersType,
} from "https://raw.githubusercontent.com/rzjprogramador/modules_typescript/v1.0.1_register_aparticipant/registers_participant/object_use_in_production/registers/registers.ts";

// importando o objeto register
import { importRegisters } from "https://raw.githubusercontent.com/rzjprogramador/lib_rzj_typescript/v1.0.1_register_aparticipant/registers_participant/object_use_in_production/registers/registers.ts";

import { objectValuesFN } from "https://raw.githubusercontent.com/rzjprogramador/lib_rzj_typescript/v1.0.0_objectsValueFN/main.ts";

// todo: modulos subir git
import { date } from "../../_subir_mods_ts/date.ts";

// REPLICANDO POINT_UNIQUE PARA A APP

// replicando o objeto register para uso na app
export const modRegisters = {
  ...importRegisters.identifiers,
  ...importRegisters.dates,
};

export const modObjectsValueFN = objectValuesFN;
export const modDate = date
