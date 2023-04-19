import { ImportRegistersType } from "../../../../../imports/_deps/_mod_deps/mod_deps.ts";

export type Participant1Model = ArgsParticipant1 & ImportRegistersType;

export interface ArgsParticipant1 {
  primeiroNome: string;
  texto: string;
  numeroInteiro: number;
}

// functions
export type participant1CoreFN = (args: ArgsParticipant1) => Participant1Model;
