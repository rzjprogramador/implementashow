import { ImportRegistersType } from "../../../../../src/_deps/_mod_deps/mod_deps.ts";

export type Participant1Model = ArgsParticipant1 & ImportRegistersType;

export interface ArgsParticipant1 {
  texto: string;
  numeroInteiro: number;
}

// functions
export type participant1CoreFN = (args: ArgsParticipant1) => Participant1Model;
