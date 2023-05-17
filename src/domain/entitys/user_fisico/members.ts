import { UserFisicoArgs } from "./contracts.ts";

interface MembersUserFisico {
  showIdade: () => number;
}

export const membersUserFisico: MembersUserFisico = {
  showIdade(this: UserFisicoArgs) {
    return 2023 - this.idade!;
  },
};