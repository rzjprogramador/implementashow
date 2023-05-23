import { objectDateCurrentMD } from "../../../../../global/imports/mod_deps.ts";
import { UserFisicoArgs } from "../contracts.ts";

interface MembersUserFisico {
  showIdade: () => Promise<number>;
}

export const membersUserFisico: MembersUserFisico = {
  async showIdade(this: UserFisicoArgs) {
    return await objectDateCurrentMD.currentYear() - this.idade!;
  },
};
