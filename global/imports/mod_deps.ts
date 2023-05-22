/* Registers *************************************************** */
export type {
  DatesType,
  IdentifiersType,
  ImportRegistersType,
} from "https://raw.githubusercontent.com/rzjprogramador/modules_typescript/v1.0.1_register_aparticipant/registers_participant/object_use_in_production/registers/registers.ts";

import { importRegisters } from "https://raw.githubusercontent.com/rzjprogramador/lib_rzj_typescript/v1.0.1_register_aparticipant/registers_participant/object_use_in_production/registers/registers.ts";

export const modRegisters = {
  ...importRegisters.identifiers,
  ...importRegisters.dates,
};
/*  *************************************************** */

/* ObjectValuesFN *************************************************** */
import { objectValuesFN } from "https://raw.githubusercontent.com/rzjprogramador/lib_rzj_typescript/v1.0.0_objectsValueFN/main.ts";

export const modObjectsValueFN = objectValuesFN;
/*  *************************************************** */

/* DATE PARA ANIVERSARIO *************************************************** */
import { objectDateCurrent } from "../../_subir_mods_ts/objectDateCurrent/main.ts"
export const modObjectDateCurrent = objectDateCurrent;
/* *************************************************** */

/* ObjectDate *************************************************** */
import { objectDateLog } from "../../_subir_mods_ts/object_date_log/main.ts";
export const modObjectDateLog = objectDateLog;
/* *************************************************** */
