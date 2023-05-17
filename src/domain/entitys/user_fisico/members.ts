import { modDate } from "../../../../global/imports/mod_deps.ts";
import { UserFisicoArgs } from "./contracts.ts";

interface MembersUserFisico {
  showIdade: () => Promise<number>;
}

export const membersUserFisico: MembersUserFisico = {
  async showIdade(this: UserFisicoArgs) {
    return await modDate.currentYear() - this.idade!;
  },
};
