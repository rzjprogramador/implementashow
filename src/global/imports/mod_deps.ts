// modules_rzj: github modules

export type {
  DatesType,
  IdentifiersType,
  ImportRegistersType,
} from "https://raw.githubusercontent.com/rzjprogramador/modules_typescript/v1.0.1_register_aparticipant/registers_participant/object_use_in_production/registers/registers.ts";

// importando o objeto register
import { importRegisters } from "https://raw.githubusercontent.com/reinaldoreizao/modules_typescript/release/registers_participant/object_use_in_production/registers/registers.ts";

import { messagesError } from "./githubModulesMessages/messagesFeedback.ts";

// REPLICANDO POINT_UNIQUE PARA A APP

// replicando o objeto register para uso na app
export const modRegisters = {
  ...importRegisters.identifiers,
  ...importRegisters.dates,
};

// replicando messages feedback
export const modMessagesFeedback = {
  primeiroNome_TamanhoCaracteresPadrao:
    messagesError.primeiroNome_TamanhoCaracteresPadrao,
};

// replica: functionsValue :: todo: conseguir exportar a funcao para mod , problema é o argumento
// export const modValidPrimeiroNome = validPrimeiroNome;
