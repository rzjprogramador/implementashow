import { ImportRegistersType } from "../../../utils/point_unique/modules_git.ts";

export type Participant1Model = ArgsParticipant1 & ImportRegistersType;

export interface ArgsParticipant1 {
  texto: string;
  numeroInteiro: number;
}

// functions
export type participant1CoreFN = (args: ArgsParticipant1) => Participant1Model;
