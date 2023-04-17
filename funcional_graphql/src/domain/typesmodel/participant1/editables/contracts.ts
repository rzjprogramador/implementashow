export type Participant1Model = ArgsParticipant1;

export interface ArgsParticipant1 {
  texto: string;
  numeroInteiro: number;
}

// functions
export type participant1CoreFN = (a: ArgsParticipant1) => Participant1Model;
